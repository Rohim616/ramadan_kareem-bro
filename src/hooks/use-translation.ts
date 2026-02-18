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
    // Default to 'bn' if the language is not available to prevent crashes.
    const langBundle = translations[language] || translations.bn;
    let translation = langBundle[key as TranslationKey] || translations.en[key as TranslationKey];

    if (translation && replacements) {
        Object.entries(replacements).forEach(([replaceKey, value]) => {
            translation = translation!.replace(`{${replaceKey}}`, String(value));
        });
    }

    return translation;
  }, [language]);

  return { t, language };
};
