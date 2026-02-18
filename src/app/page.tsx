"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuiz } from "@/contexts/quiz-context";
import { quizQuestions } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { LanternIcon, MosqueIcon } from "@/components/icons";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { doc, setDoc, increment } from 'firebase/firestore';
import { useFirestore } from "@/firebase";
import { Skeleton } from "@/components/ui/skeleton";

type AnswersState = {
  [key: number]: string;
};

function QuizLoading() {
    return (
        <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-2xl space-y-8">
                <header className="text-center">
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <Skeleton className="w-12 h-12" />
                        <Skeleton className="w-16 h-16" />
                        <Skeleton className="w-12 h-12" />
                    </div>
                    <Skeleton className="h-10 w-3/4 mx-auto" />
                    <Skeleton className="h-6 w-1/2 mx-auto mt-2" />
                </header>
                 <div className="space-y-6">
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-56 w-full" />
                 </div>
            </div>
      </main>
    )
}

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { submitAnswers, score, phoneNumber, isHydrated } = useQuiz();
  const [answers, setAnswers] = useState<AnswersState>({});
  const db = useFirestore();
  
  useEffect(() => {
    if (!isHydrated) {
      return; // Wait until the state is loaded from localStorage
    }

    // If user has a phone number, they've finished everything.
    if (phoneNumber) {
      router.replace('/confirmation');
    } 
    // If they have a score, they've finished the quiz.
    else if (score > 0) {
      router.replace('/score');
    }
  }, [isHydrated, score, phoneNumber, router]);


  const refCode = searchParams.get('ref');

  useEffect(() => {
    if (refCode && db) {
        const referralRef = doc(db, 'referrals', refCode);
        const alreadyReferredKey = `referred_by_${refCode}`;

        if (!localStorage.getItem(alreadyReferredKey)) {
            setDoc(referralRef, { count: increment(1) }, { merge: true })
            .catch((error) => {
                console.error("Error updating referral count: ", error);
            });
            // To prevent double-counting, we optimistically set the local storage item.
            // In a production app, you might want more robust logic here.
            localStorage.setItem(alreadyReferredKey, 'true');
        }
    }
  }, [refCode, db]);

  const answeredQuestions = Object.keys(answers).length;
  const totalQuestions = quizQuestions.length;
  const allQuestionsAnswered = answeredQuestions === totalQuestions;
  const progressValue = (answeredQuestions / totalQuestions) * 100;

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (allQuestionsAnswered) {
      submitAnswers(answers);
      router.push("/score");
    }
  };

  // While hydrating or before redirecting, show a loading state
  if (!isHydrated || score > 0 || phoneNumber) {
    return <QuizLoading />;
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        <header className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-center items-center gap-4 mb-4">
            <LanternIcon className="w-12 h-12 text-primary" />
            <MosqueIcon className="w-16 h-16 text-primary" />
            <LanternIcon className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary font-headline">
            Ramadan Rewards Quiz
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Test your knowledge and win exciting data rewards!
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-500"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quiz Progress</CardTitle>
              <CardDescription>
                Answered {answeredQuestions} of {totalQuestions} questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progressValue} className="w-full" />
            </CardContent>
          </Card>

          {quizQuestions.map((q, index) => (
            <Card key={q.id} className="animate-in fade-in slide-in-from-bottom-10 duration-500" style={{ animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle>
                  Question {q.id}
                </CardTitle>
                <CardDescription className="text-base text-foreground pt-2">
                  {q.question}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={answers[q.id]}
                  onValueChange={(value) => handleAnswerChange(q.id, value)}
                  className="space-y-3"
                >
                  {q.options.map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-3"
                    >
                       <RadioGroupItem value={option} id={`q${q.id}-${option}`} />
                      <Label htmlFor={`q${q.id}-${option}`} className="text-base font-normal cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}

          {allQuestionsAnswered && (
            <div className="text-center animate-in fade-in duration-700">
              <Button
                type="submit"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto"
              >
                See Your Score
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
