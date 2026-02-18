"use client";

import { useEffect } from 'react';
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

const FormSchema = z.object({
  operator: z.string({
    required_error: "Please select an operator.",
  }),
  phone: z.string().regex(/^01[3-9]\d{8}$/, "Please enter a valid 11-digit Bangladeshi phone number."),
});

export default function ClaimPage() {
  const router = useRouter();
  const { mbReward, setClaimInfo, score } = useQuiz();

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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setClaimInfo(data.operator, data.phone);
    router.push("/confirmation");
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Phone className="h-8 w-8 text-primary" />
            </div>
          <CardTitle className="text-3xl font-bold font-headline text-primary">
            Claim Your Reward
          </CardTitle>
          <CardDescription className="text-lg">
            Just one more step to get your data!
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-center text-xl font-semibold text-foreground p-4 bg-secondary rounded-lg">
                    <Gift className="w-7 h-7 mr-3 text-accent" />
                    <p>Your Reward: <span className="text-accent font-bold">{mbReward} MB</span></p>
                </div>
                <FormField
                    control={form.control}
                    name="operator"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Mobile Operator</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder="Select your mobile operator" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Grameenphone">Grameenphone</SelectItem>
                            <SelectItem value="Robi">Robi</SelectItem>
                            <SelectItem value="Banglalink">Banglalink</SelectItem>
                            <SelectItem value="Teletalk">Teletalk</SelectItem>
                            <SelectItem value="Airtel">Airtel</SelectItem>
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="01xxxxxxxxx" {...field} type="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Get Offer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </main>
  );
}
