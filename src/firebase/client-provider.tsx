// src/firebase/client-provider.tsx
'use client';
import { use, useEffect, useState } from 'react';
import { FirebaseProvider, type FirebaseContext } from './provider';
import { initializeFirebase } from './index';

type Props = {
  children: React.ReactNode;
};

export function FirebaseClientProvider({ children }: Props) {
  const [firebase, setFirebase] = useState<FirebaseContext | null>(null);

  useEffect(() => {
    const init = async () => {
      const services = await initializeFirebase();
      setFirebase(services);
    };
    init();
  }, []);

  if (!firebase) {
    // You can return a loading spinner or null here
    return null;
  }

  return <FirebaseProvider {...firebase}>{children}</FirebaseProvider>;
}
