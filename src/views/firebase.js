
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBESRotkCefUayEdjbVFI47lKKkrscW5e4",
  authDomain: "srsweb-e9a21.firebaseapp.com",
  projectId: "srsweb-e9a21",
  storageBucket: "srsweb-e9a21.appspot.com",
  messagingSenderId: "332346570940",
  appId: "1:332346570940:web:829df7c9fd84eeaffdf8b9"
});

// used for the firestore refs
const db = getFirestore(firebaseConfig)
export const contactsCollection = collection(db, 'Contacts')