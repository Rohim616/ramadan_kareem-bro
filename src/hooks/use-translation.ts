"use client";

import { useQuiz } from "@/contexts/quiz-context";
import en from "@/locales/en.json";
import bn from "@/locales/bn.json";
import { useCallback } from "react";

const translations = { en, bn };

type TranslationKey = keyof typeof en;

export const useTranslation = () => {
  const { language } = useQuiz();

  const t = useCallback((key: TranslationKey, replacements?: Record<string, string | number>) => {
    let translation = translations[language][key as TranslationKey] || translations['en'][key as TranslationKey];

    if (replacements) {
        Object.entries(replacements).forEach(([key, value]) => {
            translation = translation.replace(`{${key}}`, String(value));
        });
    }

    return translation;
  }, [language]);

  return { t, language };
};
