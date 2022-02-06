// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBIYH0Dg1XlNS8Ix91JhyswZU0TL9hTv6w',
  authDomain: 'image-upload-3d4b2.firebaseapp.com',
  projectId: 'image-upload-3d4b2',
  storageBucket: 'image-upload-3d4b2.appspot.com',
  messagingSenderId: '763540960662',
  appId: '1:763540960662:web:d22ef7a9e92be94d9e99b7',
  measurementId: 'G-JZB1QWLK3W',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

// to interact with firestore database
const projectFirestore = firebase.firestore();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
