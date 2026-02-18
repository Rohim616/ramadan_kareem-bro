"use client";

import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { quizQuestions } from '@/lib/quiz-data';

interface QuizState {
  answers: { [key: number]: string };
  score: number;
  mbReward: number;
  phoneNumber: string | null;
  referralCode: string | null;
}

interface QuizContextType extends QuizState {
  isHydrated: boolean;
  submitAnswers: (answers: { [key:number]: string }) => void;
  setPhoneNumber: (phone: string) => void;
  setReferralCode: (code: string) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const initialState: QuizState = {
  answers: {},
  score: 0,
  mbReward: 0,
  phoneNumber: null,
  referralCode: null,
};

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuizState>(initialState);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load state from localStorage on the client side to avoid hydration mismatch
  useEffect(() => {
    try {
      const item = window.localStorage.getItem('quizState');
      if (item) {
        setState(JSON.parse(item));
      }
    } catch (error) {
      console.error('Failed to load quiz state from localStorage', error);
    } finally {
        setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    // Only run this effect if state is not the initial state and component is hydrated
    if (isHydrated) {
        try {
            window.localStorage.setItem('quizState', JSON.stringify(state));
        } catch (error) {
            console.error('Failed to save quiz state to localStorage', error);
        }
    }
  }, [state, isHydrated]);

  const submitAnswers = (answers: { [key: number]: string }) => {
    let correctAnswers = 0;
    quizQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctAnswers++;
      }
    });
    const scorePercentage = Math.round((correctAnswers / quizQuestions.length) * 100);
    const reward = scorePercentage * 10; // e.g., 80% score -> 800 MB

    setState(prev => ({
      ...prev,
      answers,
      score: scorePercentage,
      mbReward: reward,
    }));
  };

  const setPhoneNumber = (phone: string) => {
    setState(prev => ({ ...prev, phoneNumber: phone }));
  };

  const setReferralCode = (code: string) => {
    setState(prev => ({ ...prev, referralCode: code }));
  }

  const resetQuiz = () => {
    setState(initialState);
    try {
      // Also remove the referral tracking keys from local storage
      Object.keys(window.localStorage).forEach(key => {
        if (key.startsWith('referred_by_')) {
          window.localStorage.removeItem(key);
        }
      });
      window.localStorage.removeItem('quizState');
    } catch (error) {
      console.error('Failed to clear quiz state from localStorage', error);
    }
  };

  const value = useMemo(() => ({
    ...state,
    isHydrated,
    submitAnswers,
    setPhoneNumber,
    setReferralCode,
    resetQuiz,
  }), [state, isHydrated]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
