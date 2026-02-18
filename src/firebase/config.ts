// src/firebase/config.ts
import { FirebaseOptions } from 'firebase/app';

// This function is used to get the Firebase config from the environment variables.
// It is important to not check these values in to source control.
export function getFirebaseConfig(): FirebaseOptions {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  for (const key in firebaseConfig) {
    if (
      firebaseConfig[key as keyof typeof firebaseConfig] === undefined
    ) {
      throw new Error(
        `Missing Firebase config value for ${key}. Please check your .env.local file.`
      );
    }
  }

  return firebaseConfig;
}
