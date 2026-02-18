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
    // By setting this in useEffect, we ensure it only runs on the client.
    // This will open the dialog on every hard refresh or initial page load.
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
            গুরুত্বপূর্ণ সতর্কবার্তা
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base !mt-4 space-y-3 text-muted-foreground">
            <span className="block">
              এই অফারটি একজন ব্যবহারকারীর জন্য <strong>শুধুমাত্র একবার</strong> প্রযোজ্য। পুরস্কার Claim করার পর আপনি এই ওয়েবসাইটে নতুন করে কিছু করতে পারবেন না।
            </span>
            <span className="block font-medium text-foreground">
              সঠিক উত্তর দিয়ে সর্বোচ্চ পুরস্কার জেতার চেষ্টা করুন। প্রয়োজনে অন্যের সাহায্যও নিতে পারেন। শুভকামনা!
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
            আমি বুঝেছি
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
