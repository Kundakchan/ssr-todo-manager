import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import type { LogIn, Registration } from "~/types/auth";

export const initFirebase = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = user;
    if (user) {
      const accessToken = await getIdToken(user);
      useCookie(`accessToken`).value = accessToken;
    } else {
      useCookie("accessToken", { maxAge: -1 }).value = "";
    }
  });
};
export const logIn: LogIn = async (password, email) => {
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    handlerErrorFirebase(error);
  }
};
export const registration: Registration = async (password, email, name) => {
  const auth = getAuth();
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    if (auth?.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
    }
  } catch (error) {
    handlerErrorFirebase(error);
  }
};
export const logOut = async () => {
  const auth = getAuth();
  try {
    await auth.signOut();
  } catch (error) {
    handlerErrorFirebase(error);
  }
};
