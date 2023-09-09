import { initializeApp } from "firebase/app";

export default defineNuxtPlugin({
  name: "firebase",
  parallel: true,
  setup() {
    const config = useRuntimeConfig().public.FIREBASE_CONNECTION;
    initializeApp(config);
    initFirebase();
  },
});
