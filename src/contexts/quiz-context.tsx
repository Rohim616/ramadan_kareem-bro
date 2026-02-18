"use client";

import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect, useCallback } from 'react';
import { quizQuestions, Question } from '@/lib/quiz-data';

const TOTAL_ATTEMPTS = 3;
const QUESTIONS_PER_QUIZ = 4;

// Helper function to shuffle an array
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

interface QuizState {
  answers: { [key: number]: string };
  score: number;
  mbReward: number;
  phoneNumber: string | null;
  operator: string | null;
  referralCode: string | null;
  language: 'en' | 'bn';
  attempts: number;
  usedQuestionIds: number[];
  currentQuestions: Question[];
}

interface QuizContextType extends QuizState {
  isHydrated: boolean;
  submitAnswers: (answers: { [key:number]: string }) => void;
  setClaimInfo: (operator: string, phone: string) => void;
  setReferralCode: (code: string) => void;
  resetQuiz: () => void;
  setLanguage: (lang: 'en' | 'bn') => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const initialState: QuizState = {
  answers: {},
  score: 0,
  mbReward: 0,
  phoneNumber: null,
  operator: null,
  referralCode: null,
  language: 'bn',
  attempts: 0,
  usedQuestionIds: [],
  currentQuestions: [],
};

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuizState>(initialState);
  const [isHydrated, setIsHydrated] = useState(false);

  const startNewQuiz = useCallback((currentState: QuizState): QuizState => {
    if (currentState.attempts >= TOTAL_ATTEMPTS) {
      return currentState;
    }
    
    const availableQuestions = quizQuestions.filter(q => !currentState.usedQuestionIds.includes(q.id));
    const newQuestions = shuffleArray(availableQuestions).slice(0, QUESTIONS_PER_QUIZ);
    const newUsedIds = newQuestions.map(q => q.id);

    return {
      ...currentState,
      score: 0,
      mbReward: 0,
      answers: {},
      currentQuestions: newQuestions,
      usedQuestionIds: [...currentState.usedQuestionIds, ...newUsedIds],
      attempts: currentState.attempts + 1,
    };
  }, []);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem('quizState');
      let loadedState = item ? JSON.parse(item) : initialState;
      
      // On initial load, if there are no questions, start the first quiz
      if (loadedState.attempts === 0 && loadedState.currentQuestions.length === 0) {
        loadedState = startNewQuiz(loadedState);
      }

      setState(loadedState);
    } catch (error) {
      console.error('Failed to load quiz state from localStorage', error);
      setState(startNewQuiz(initialState)); // Start fresh if loading fails
    } finally {
      setIsHydrated(true);
    }
  }, [startNewQuiz]);

  useEffect(() => {
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
    state.currentQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer[state.language]) {
        correctAnswers++;
      }
    });
    const scorePercentage = Math.round((correctAnswers / state.currentQuestions.length) * 100);
    const reward = scorePercentage * 10; // e.g., 80% score -> 800 MB

    setState(prev => ({
      ...prev,
      answers,
      score: scorePercentage,
      mbReward: reward,
    }));
  };

  const setClaimInfo = (operator: string, phone: string) => {
    setState(prev => ({ ...prev, operator, phoneNumber: phone }));
  };

  const setReferralCode = (code: string) => {
    setState(prev => ({ ...prev, referralCode: code }));
  }

  const resetQuiz = () => {
    setState(prevState => {
      // Logic for "Try Again"
      if (prevState.attempts < TOTAL_ATTEMPTS) {
        return startNewQuiz(prevState);
      }
      
      // Logic for "Start Over" after claiming, which resets everything
      try {
        Object.keys(window.localStorage).forEach(key => {
          if (key.startsWith('referred_by_')) {
            window.localStorage.removeItem(key);
          }
        });
        window.localStorage.removeItem('quizState');
      } catch (error) {
        console.error('Failed to clear quiz state from localStorage', error);
      }
      return startNewQuiz(initialState);
    });
  };

  const setLanguage = (lang: 'en' | 'bn') => {
    setState(prev => ({ ...prev, language: lang }));
  }

  const value = useMemo(() => ({
    ...state,
    isHydrated,
    submitAnswers,
    setClaimInfo,
    setReferralCode,
    resetQuiz,
    setLanguage,
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
