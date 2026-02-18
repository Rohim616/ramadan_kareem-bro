"use client";

import { useQuiz } from "@/contexts/quiz-context";
import en from "@/locales/en.json";
import bn from "@/locales/bn.json";
import { useCallback } from "react";

const translations = { en, bn };

// Helper to get nested values from an object using a dot-separated string.
const getNestedValue = (obj: any, path: string): string | undefined => {
  if (!obj) return undefined;
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const useTranslation = () => {
  const { language } = useQuiz();

  const t = useCallback((key: string, replacements?: Record<string, string | number>) => {
    // Default to 'bn' if the language is not available to prevent crashes.
    const langBundle = translations[language] || translations.bn;
    
    let translation = getNestedValue(langBundle, key) || getNestedValue(translations.en, key);

    if (translation && replacements) {
        Object.entries(replacements).forEach(([replaceKey, value]) => {
            translation = (translation as string).replace(`{${replaceKey}}`, String(value));
        });
    }

    return translation;
  }, [language]);

  return { t, language };
};
