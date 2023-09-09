import type { User } from "firebase/auth";
export const useFirebaseUser = () =>
  useState<User | null>("userFirebase", () => null);
