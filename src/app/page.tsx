"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuiz } from "@/contexts/quiz-context";
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
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { doc, setDoc, increment } from 'firebase/firestore';
import { useFirestore } from "@/firebase";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/hooks/use-translation";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter } from "@/components/ui/alert-dialog";

type AnswersState = {
  [key: number]: string;
};

const TOTAL_ATTEMPTS = 3;

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
  const { submitAnswers, score, phoneNumber, isHydrated, language, currentQuestions, attempts } = useQuiz();
  const { t } = useTranslation();

  const [answers, setAnswers] = useState<AnswersState>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const db = useFirestore();
  
  useEffect(() => {
    if (!isHydrated) {
      return; // Wait until the state is loaded
    }
    if (phoneNumber) {
      router.replace('/confirmation');
    } 
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
            localStorage.setItem(alreadyReferredKey, 'true');
        }
    }
  }, [refCode, db]);

  const totalQuestions = currentQuestions ? currentQuestions.length : 0;
  const progressValue = totalQuestions > 0 ? (currentQuestionIndex / totalQuestions) * 100 : 0;
  const currentQuestion = currentQuestions?.[currentQuestionIndex];
  
  const handleNext = () => {
    const finalAnswers = { ...answers, [currentQuestion!.id]: selectedOption };

    if (currentQuestionIndex < totalQuestions - 1) {
      setAnswers(finalAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      window.open('https://www.effectivegatecpm.com/ep89i0w7zc?key=8b019eeffed8ea22d62809411f761fb5', '_blank');
      submitAnswers(finalAnswers);
      router.push("/score");
    }
  };

  if (!isHydrated) {
    return <QuizLoading />;
  }

  if (attempts >= TOTAL_ATTEMPTS && !phoneNumber && (!currentQuestions || currentQuestions.length === 0)) {
    return (
        <main className="container mx-auto flex min-h-screen items-center justify-center p-4">
            <AlertDialog open={true}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 mb-4">
                            <BookOpenCheck className="h-8 w-8 text-destructive" />
                        </div>
                        <AlertDialogTitle>{t('max_attempts_title')}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {t('max_attempts_description')}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => window.location.href = 'https://www.effectivegatecpm.com/ep89i0w7zc?key=8b019eeffed8ea22d62809411f761fb5'}>
                            OK
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </main>
    );
  }

  // While hydrating or redirecting, show a loading state
  if (score > 0 || phoneNumber || !currentQuestions || currentQuestions.length === 0 || !currentQuestion) {
    return <QuizLoading />;
  }

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

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
            {t('quiz_page_title')}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {t('quiz_page_description')}
          </p>
        </header>

        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <Card>
            <CardHeader>
              <CardTitle>{t('quiz_progress_title')}</CardTitle>
              <CardDescription>
                {t('quiz_progress_description_alt', { current: currentQuestionIndex + 1, total: totalQuestions })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progressValue} className="w-full" />
            </CardContent>
          </Card>

          <Card key={currentQuestion.id}>
            <CardHeader>
              <CardTitle>
                {t('quiz_question_title', { id: currentQuestionIndex + 1 })}
              </CardTitle>
              <CardDescription className="text-base text-foreground pt-2">
                {currentQuestion.question[language]}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
                className="space-y-3"
              >
                {currentQuestion.options[language].map((option) => (
                  <div
                    key={option}
                    className="flex items-center space-x-3"
                  >
                     <RadioGroupItem value={option} id={`q${currentQuestion.id}-${option}`} />
                    <Label htmlFor={`q${currentQuestion.id}-${option}`} className="text-base font-normal cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="text-center animate-in fade-in duration-700">
            <Button
              onClick={handleNext}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto"
              disabled={!selectedOption}
            >
              {isLastQuestion ? t('quiz_submit_button') : t('quiz_next_button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
