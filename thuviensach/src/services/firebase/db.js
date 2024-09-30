import  { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDA8H1x5mYJdE3kBaKDRIe_Ex3YcH0kwbQ",
    authDomain: "materialui-2faa7.firebaseapp.com",
    projectId: "materialui-2faa7",
    storageBucket: "materialui-2faa7.appspot.com",
    messagingSenderId: "401434747886",
    appId: "1:401434747886:web:fe306d2887ff6fdabf64ff",
    measurementId: "G-CYRH6PBQH8"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

async function register({firstname, lastname, email, password}) {
    const resp = await createUserWithEmailAndPassword(auth, email, password);    
    await updateProfile(resp.user,{displayName:`${firstname} ${lastname}`});    
}

async function login({email, password}) {
    const resp = await signInWithEmailAndPassword(auth, email, password);

    return resp.user;
}

async function logout() {
    const resp = await signOut(auth);
}

export const firebasedb = {
    register: register,
    login: login,
    logout: logout,
};