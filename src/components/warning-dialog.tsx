"use client";

import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function WarningDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
              <AlertTriangle className="h-10 w-10 text-yellow-500" />
          </div>
          <AlertDialogTitle className="text-center text-2xl font-bold text-primary">
            {t('warning_title')}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base !mt-4 space-y-3 text-muted-foreground">
            <span className="block">
              {t('warning_line_1')}
            </span>
            <span className="block font-medium text-foreground">
              {t('warning_line_2')}
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="pt-2">
          <AlertDialogAction 
            className="w-full bg-primary hover:bg-primary/90" 
            onClick={() => {
              window.open('https://www.effectivegatecpm.com/ep89i0w7zc?key=8b019eeffed8ea22d62809411f761fb5', '_blank');
              setIsOpen(false);
            }}>
            {t('warning_button')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
