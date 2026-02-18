"use client";

import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useQuiz } from "@/contexts/quiz-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, PartyPopper } from "lucide-react";
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { Skeleton } from '@/components/ui/skeleton';

function ConfirmationLoading() {
    return (
        <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
            <Card className="w-full max-w-md text-center shadow-2xl">
                <CardHeader className="items-center">
                    <div className="relative mb-4">
                        <Skeleton className="h-20 w-20 rounded-full" />
                    </div>
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-5 w-64 mt-2" />
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg space-y-1">
                        <Skeleton className="h-4 w-20 mx-auto" />
                        <Skeleton className="h-8 w-32 mx-auto" />
                    </div>
                    <div className="p-4 bg-secondary rounded-lg space-y-1">
                        <Skeleton className="h-4 w-20 mx-auto" />
                        <Skeleton className="h-6 w-40 mx-auto" />
                    </div>
                    <div className="p-4 bg-secondary rounded-lg space-y-1">
                        <Skeleton className="h-4 w-20 mx-auto" />
                        <Skeleton className="h-6 w-40 mx-auto" />
                    </div>
                    <Skeleton className="h-4 w-5/6 mx-auto" />
                </CardContent>
                <CardFooter>
                    <Skeleton className="h-10 w-full" />
                </CardFooter>
            </Card>
        </main>
    );
}

export default function ConfirmationPage() {
    const router = useRouter();
    const { mbReward, phoneNumber, operator, resetQuiz, isHydrated } = useQuiz();
    const { t } = useTranslation();

    useEffect(() => {
        if (!isHydrated) {
            return;
        }
        // If user lands here without phone number, redirect
        if (!phoneNumber) {
          router.replace('/claim');
        }
      }, [phoneNumber, router, isHydrated]);

      const handleStartOver = () => {
        window.open('https://www.effectivegatecpm.com/ep89i0w7zc?key=8b019eeffed8ea22d62809411f761fb5', '_blank');
        resetQuiz();
        router.push('/');
      }

  if (!isHydrated) {
    return <ConfirmationLoading />;
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="items-center">
            <div className="relative mb-4">
                <CheckCircle className="h-20 w-20 text-green-500" />
                <PartyPopper className="absolute -top-2 -right-2 h-8 w-8 text-accent animate-pulse" />
                <PartyPopper className="absolute -bottom-2 -left-2 h-8 w-8 text-primary animate-pulse [animation-delay:200ms]" />
            </div>
          <CardTitle className="text-3xl font-bold font-headline text-primary">
            {t('confirmation_page_title')}
          </CardTitle>
          <CardDescription className="text-lg">
            {t('confirmation_page_description')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{t('confirmation_reward_label')}</p>
                <p className="text-2xl font-bold text-primary">{mbReward} MB</p>
            </div>
            {operator && (
              <div className="p-4 bg-secondary rounded-lg space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">{t('confirmation_operator_label')}</p>
                  <p className="text-xl font-bold text-primary">{t(`operators.${operator}` as any)}</p>
              </div>
            )}
            <div className="p-4 bg-secondary rounded-lg space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{t('confirmation_phone_label')}</p>
                <p className="text-xl font-bold text-primary">{phoneNumber}</p>
            </div>
          <p className="text-muted-foreground px-4">
            {t('confirmation_delivery_notice')}
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleStartOver} variant="outline" className="w-full">
            {t('confirmation_start_over_button')}
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
