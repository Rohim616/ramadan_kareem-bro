"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/contexts/quiz-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, RotateCcw, ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function ScorePage() {
  const router = useRouter();
  const { score, mbReward, resetQuiz, answers } = useQuiz();

  useEffect(() => {
    // If user lands here without answering, redirect to home
    if (Object.keys(answers).length === 0) {
      router.replace('/');
    }
  }, [answers, router]);
  
  const handleReset = () => {
    resetQuiz();
    router.push('/');
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="items-center">
            <div className="p-4 bg-accent/20 rounded-full mb-4">
                <Trophy className="w-12 h-12 text-accent" />
            </div>
          <CardTitle className="text-3xl font-bold font-headline text-primary">
            Quiz Result
          </CardTitle>
          <CardDescription className="text-lg">
            Here is how you performed!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-secondary rounded-lg">
            <p className="text-sm font-medium text-muted-foreground">YOUR SCORE</p>
            <p className="text-6xl font-bold text-primary">{score}%</p>
          </div>
          <div className="flex items-center justify-center text-2xl font-semibold text-foreground">
            <Gift className="w-8 h-8 mr-3 text-accent" />
            <p>You've won <span className="text-accent font-bold">{mbReward} MB</span> of data!</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" onClick={handleReset} className="w-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Link href="/claim" passHref className="w-full">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
