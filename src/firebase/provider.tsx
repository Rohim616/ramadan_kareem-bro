// src/firebase/provider.tsx
'use client';
import { createContext, useContext, useMemo } from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { FirebaseNotInitializedError } from './errors';
import FirebaseErrorListener from '@/components/FirebaseErrorListener';

export interface FirebaseContext {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

const FirebaseContext = createContext<FirebaseContext | null>(null);

type Props = {
  children: React.ReactNode;
} & FirebaseContext;

export function FirebaseProvider({ children, app, auth, firestore }: Props) {
  const value = useMemo(
    () => ({ app, auth, firestore }),
    [app, auth, firestore]
  );

  return (
    <FirebaseContext.Provider value={value}>
      {children}
      <FirebaseErrorListener />
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) throw new FirebaseNotInitializedError();
  return context;
}

export const useFirebaseApp = () => useFirebase().app;
export const useAuth = () => useFirebase().auth;
export const useFirestore = () => useFirebase().firestore;
