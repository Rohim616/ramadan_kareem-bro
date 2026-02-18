"use client";

import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useQuiz } from "@/contexts/quiz-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, PartyPopper } from "lucide-react";
import Link from 'next/link';

export default function ConfirmationPage() {
    const router = useRouter();
    const { mbReward, phoneNumber, resetQuiz } = useQuiz();

    useEffect(() => {
        // If user lands here without phone number, redirect
        if (!phoneNumber) {
          router.replace('/claim');
        }
      }, [phoneNumber, router]);

      const handleStartOver = () => {
        resetQuiz();
        router.push('/');
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
            Congratulations!
          </CardTitle>
          <CardDescription className="text-lg">
            Your reward is on its way.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg space-y-1">
                <p className="text-sm font-medium text-muted-foreground">REWARD</p>
                <p className="text-2xl font-bold text-primary">{mbReward} MB</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg space-y-1">
                <p className="text-sm font-medium text-muted-foreground">PHONE NUMBER</p>
                <p className="text-2xl font-bold text-primary">{phoneNumber}</p>
            </div>
          <p className="text-muted-foreground px-4">
            You will receive your MB reward within the next 3-5 hours. Thank you for participating!
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleStartOver} variant="outline" className="w-full">
            Start Over
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
