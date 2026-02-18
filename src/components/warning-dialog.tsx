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

export function WarningDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const warningShown = sessionStorage.getItem("warningShown");
      if (!warningShown) {
        setIsOpen(true);
        sessionStorage.setItem("warningShown", "true");
      }
    } catch (error) {
      console.warn("Session storage is not available. The warning may appear on every reload.");
      // Fallback for environments where sessionStorage is not available
      if (!isOpen) {
        setIsOpen(true);
      }
    }
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
            গুরুত্বপূর্ণ সতর্কবার্তা
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base !mt-4 space-y-3 text-muted-foreground">
            <p>
              এই অফারটি একজন ব্যবহারকারীর জন্য <strong>শুধুমাত্র একবার</strong> প্রযোজ্য। পুরস্কার Claim করার পর আপনি এই ওয়েবসাইটে নতুন করে কিছু করতে পারবেন না।
            </p>
            <p className="font-medium text-foreground">
              সঠিক উত্তর দিয়ে সর্বোচ্চ পুরস্কার জেতার চেষ্টা করুন। প্রয়োজনে অন্যের সাহায্যও নিতে পারেন। শুভকামনা!
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="pt-2">
          <AlertDialogAction className="w-full bg-primary hover:bg-primary/90" onClick={() => setIsOpen(false)}>
            আমি বুঝেছি
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
