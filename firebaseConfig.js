import {initializeApp, getApps, getApp} from '@react-native-firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyAvmlXjMLy1eEbcliyDWcyBWIMcFqz2rPE',
  authDomain: 'dhievent.firebaseapp.com',
  projectId: 'dhievent',
  storageBucket: 'dhievent.firebasestorage.app',
  messagingSenderId: '821180289473',
  appId: '1:821180289473:web:a1a2e84b93223705225f40',
  measurementId: 'G-EXG4K75K9W',
};

// Ensure Firebase is initialized only once
const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export default firebaseApp;
