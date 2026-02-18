"use client";

import { useQuiz } from "@/contexts/quiz-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

export function LanguageSwitcher() {
  const { language, setLanguage } = useQuiz();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-1 rounded-full border border-primary/20 bg-card/50 p-1 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
            "rounded-full px-4 text-sm font-semibold",
            language === 'en' && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
        )}
        onClick={() => setLanguage('en')}
      >
        {t('language_switcher_en')}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
            "rounded-full px-4 text-sm font-semibold",
            language === 'bn' && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
        )}
        onClick={() => setLanguage('bn')}
      >
        {t('language_switcher_bn')}
      </Button>
    </div>
  );
}
