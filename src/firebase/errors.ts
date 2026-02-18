// src/firebase/errors.ts
export type SecurityRuleContext = {
    path: string;
    operation: 'get' | 'list' | 'create' | 'update' | 'delete';
    requestResourceData?: any;
  };
  
  export class FirestorePermissionError extends Error {
    private context: SecurityRuleContext;
  
    constructor(context: SecurityRuleContext) {
      const message = `Firestore permission denied for ${context.operation} on ${context.path}`;
      super(message);
      this.name = 'FirestorePermissionError';
      this.context = context;
    }
  
    toMetric() {
      return {
        message: this.message,
        context: this.context,
      };
    }
  }
  
  export class FirebaseNotInitializedError extends Error {
    constructor() {
      super('Firebase has not been initialized. Please call initializeFirebase first.');
      this.name = 'FirebaseNotInitializedError';
    }
  }
  