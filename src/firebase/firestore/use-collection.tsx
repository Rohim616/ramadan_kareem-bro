// src/firebase/firestore/use-collection.tsx
'use client';
import { useState, useEffect } from 'react';
import type {
  Query,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function useCollection<T extends DocumentData>(query: Query<T> | null) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!query) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      query,
      (snapshot: QuerySnapshot<T>) => {
        const result: T[] = [];
        snapshot.forEach((doc) =>
          result.push({ ...doc.data(), id: doc.id })
        );
        setData(result);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Error in useCollection:', err);
        setError(err);
        setLoading(false);

        if (err.code === 'permission-denied') {
          const permissionError = new FirestorePermissionError({
            path: query.path,
            operation: 'list',
          });
          errorEmitter.emit('permission-error', permissionError);
        }
      }
    );

    return () => unsubscribe();
  }, [query]);

  return { data, loading, error };
}
