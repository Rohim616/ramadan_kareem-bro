// src/components/FirebaseErrorListener.tsx
'use client';
import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { useToast } from '@/hooks/use-toast';
import { FirestorePermissionError } from '@/firebase/errors';

// This is a global listener for Firebase errors.
// It is used to display a toast notification when a permission error occurs.
// This is only active in development.
export default function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const handlePermissionError = (error: FirestorePermissionError) => {
        console.error('Firestore Permission Error:', error.toMetric());
        toast({
          variant: 'destructive',
          title: 'Firestore Permission Denied',
          description: error.message,
          duration: 10000,
        });
      };

      errorEmitter.on('permission-error', handlePermissionError);

      return () => {
        errorEmitter.off('permission-error', handlePermissionError);
      };
    }
  }, [toast]);

  return null;
}
