import { initializeApp } from "firebase/app";
import "firebase/firestore";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7ZtxzONuN2ZbVnV5rjn1DtcEBrb7aHOM",
  authDomain: "portfolio-43d1b.firebaseapp.com",
  projectId: "portfolio-43d1b",
  storageBucket: "portfolio-43d1b.appspot.com",
  messagingSenderId: "5996957596",
  appId: "1:5996957596:web:9f2b0ad9b391c301b08259",
  measurementId: "G-WPKYEZ6B6T",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default { db };

export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "profileData"));
  const profileData: any = {};
  querySnapshot.forEach((doc) => {
    profileData[doc.id] = Object.values(doc.data());
  });
  return profileData;
};

export const addToDB = async (place: string, data: any) => {
  const docRef = doc(db, "profileData", place);

  await setDoc(docRef, {
    ...data,
  });

  console.log("setDoc...");
};
