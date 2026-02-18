"use client";

import { useEffect, useMemo } from 'react';
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useQuiz } from "@/contexts/quiz-context";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gift, Phone } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFirestore } from '@/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { FirestorePermissionError } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';
import { useTranslation } from '@/hooks/use-translation';

const OPERATORS = ["Grameenphone", "Robi", "Banglalink", "Teletalk", "Airtel"] as const;

const operatorPrefixes: Record<typeof OPERATORS[number], string[]> = {
  Grameenphone: ["013", "017"],
  Robi: ["018"],
  Airtel: ["016"],
  Banglalink: ["014", "019"],
  Teletalk: ["015"],
};

export default function ClaimPage() {
  const router = useRouter();
  const { mbReward, setClaimInfo, score } = useQuiz();
  const { t } = useTranslation();
  const db = useFirestore();

  const FormSchema = useMemo(() => z.object({
    operator: z.enum(OPERATORS, {
      required_error: t('claim_operator_required'),
    }),
    phone: z.string().regex(/^01[3-9]\d{8}$/, t('claim_phone_invalid')),
  })
  .refine(
    (data) => {
      const prefixes = operatorPrefixes[data.operator];
      return prefixes.some((prefix) => data.phone.startsWith(prefix));
    },
    {
      message: t('claim_phone_operator_mismatch'),
      path: ["phone"],
    }
  ), [t]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
    },
  });

  useEffect(() => {
    // If user lands here without a score, redirect to home
    if (score === 0 && mbReward === 0) {
      router.replace('/');
    }
  }, [score, mbReward, router]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!db) {
        form.setError("root.serverError", {
            message: t('claim_error_server'),
        });
        return;
    }

    const { phone, operator } = data;
    const claimedNumberRef = doc(db, 'claimed_numbers', phone);

    try {
        const docSnap = await getDoc(claimedNumberRef);

        if (docSnap.exists()) {
            form.setError("phone", {
                type: "manual",
                message: t('claim_error_already_claimed'),
            });
        } else {
            window.open('https://www.effectivegatecpm.com/ep89i0w7zc?key=8b019eeffed8ea22d62809411f761fb5', '_blank');
            setClaimInfo(operator, phone);
            router.push("/confirmation");

            setDoc(claimedNumberRef, { claimedAt: serverTimestamp() })
                .catch((serverError) => {
                    console.error("Failed to mark number as claimed:", serverError);
                    if (serverError.code === 'permission-denied') {
                         const permissionError = new FirestorePermissionError({
                            path: claimedNumberRef.path,
                            operation: 'create',
                            requestResourceData: { claimedAt: 'serverTimestamp' },
                         });
                         errorEmitter.emit('permission-error', permissionError);
                    }
                });
        }
    } catch (err: any) {
        if (err.code === 'permission-denied') {
            const permissionError = new FirestorePermissionError({
                path: claimedNumberRef.path,
                operation: 'get',
            });
            errorEmitter.emit('permission-error', permissionError);
        }
        console.error("Error checking phone number:", err);
        form.setError("phone", {
            type: "manual",
            message: t('claim_error_generic'),
        });
    }
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Phone className="h-8 w-8 text-primary" />
            </div>
          <CardTitle className="text-3xl font-bold font-headline text-primary">
            {t('claim_page_title')}
          </CardTitle>
          <CardDescription className="text-lg">
            {t('claim_page_description')}
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-center text-xl font-semibold text-foreground p-4 bg-secondary rounded-lg">
                    <Gift className="w-7 h-7 mr-3 text-accent" />
                    <p>{t('claim_reward_label', { mbReward: mbReward })}</p>
                </div>
                <FormField
                    control={form.control}
                    name="operator"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t('claim_operator_label')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder={t('claim_operator_placeholder')} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Grameenphone">{t('operators.Grameenphone')}</SelectItem>
                            <SelectItem value="Robi">{t('operators.Robi')}</SelectItem>
                            <SelectItem value="Banglalink">{t('operators.Banglalink')}</SelectItem>
                            <SelectItem value="Teletalk">{t('operators.Teletalk')}</SelectItem>
                            <SelectItem value="Airtel">{t('operators.Airtel')}</SelectItem>
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                    )}
                />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('claim_phone_label')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('claim_phone_placeholder')} {...field} type="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? t('claim_submit_button_submitting') : t('claim_submit_button')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </main>
  );
}
