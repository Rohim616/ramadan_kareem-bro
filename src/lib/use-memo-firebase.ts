// src/lib/use-memo-firebase.ts
'use client';
import { useMemo } from 'react';
import type { Query, DocumentReference } from 'firebase/firestore';

// Custom hook to memoize Firestore queries and document references.
// This prevents infinite loops in useEffect when using these objects as dependencies.
export function useMemoFirebase<T extends Query | DocumentReference | null>(
  factory: () => T,
  deps: any[]
) {
  return useMemo(() => {
    const obj = factory();
    if (!obj) return null;
    // The path property is a stable identifier for a query or doc ref
    return obj;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(deps)]);
}
