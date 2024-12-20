// auth.js
import { auth } from '.';
import firebase from 'firebase/app';

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    // User signed in successfully
    const user = result.user;
    // ...
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};
