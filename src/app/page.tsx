"use client";

import { useState, useMemo, useEffect } from "react";
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
import { getFirestore, doc, setDoc, increment } from 'firebase/firestore';
import { initializeFirebase } from "@/firebase";

type AnswersState = {
  [key: number]: string;
};

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { submitAnswers } = useQuiz();
  const [answers, setAnswers] = useState<AnswersState>({});

  const refCode = searchParams.get('ref');

  useEffect(() => {
    if (refCode) {
        const db = getFirestore(initializeFirebase());
        const referralRef = doc(db, 'referrals', refCode);
        const alreadyReferredKey = `referred_by_${refCode}`;

        if (!localStorage.getItem(alreadyReferredKey)) {
            setDoc(referralRef, { count: increment(1) }, { merge: true })
            .then(() => {
                localStorage.setItem(alreadyReferredKey, 'true');
            })
            .catch((error) => {
                console.error("Error updating referral count: ", error);
            });
        }
    }
  }, [refCode]);

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
