"use client";

import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { quizQuestions } from '@/lib/quiz-data';

interface QuizState {
  answers: { [key: number]: string };
  score: number;
  mbReward: number;
  phoneNumber: string | null;
}

interface QuizContextType extends QuizState {
  submitAnswers: (answers: { [key: number]: string }) => void;
  setPhoneNumber: (phone: string) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const initialState: QuizState = {
  answers: {},
  score: 0,
  mbReward: 0,
  phoneNumber: null,
};

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuizState>(initialState);

  // Load state from localStorage on the client side to avoid hydration mismatch
  useEffect(() => {
    try {
      const item = window.localStorage.getItem('quizState');
      if (item) {
        setState(JSON.parse(item));
      }
    } catch (error) {
      console.error('Failed to load quiz state from localStorage', error);
    }
  }, []);

  useEffect(() => {
    // Only run this effect if state is not the initial state
    if (state !== initialState) {
        try {
            window.localStorage.setItem('quizState', JSON.stringify(state));
        } catch (error) {
            console.error('Failed to save quiz state to localStorage', error);
        }
    }
  }, [state]);

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

  const resetQuiz = () => {
    setState(initialState);
    try {
      window.localStorage.removeItem('quizState');
    } catch (error) {
      console.error('Failed to clear quiz state from localStorage', error);
    }
  };

  const value = useMemo(() => ({
    ...state,
    submitAnswers,
    setPhoneNumber,
    resetQuiz,
  }), [state]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
