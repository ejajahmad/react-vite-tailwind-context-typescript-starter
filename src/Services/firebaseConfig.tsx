import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, set, remove } from 'firebase/database';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, onSnapshot, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAloOFE0OmpwlYncix3Q6YJrVgGE87DaYQ',
    authDomain: 'hotelmussoorie-2022.firebaseapp.com',
    projectId: 'hotelmussoorie-2022',
    storageBucket: 'hotelmussoorie-2022.appspot.com',
    messagingSenderId: '2267438503',
    appId: '1:2267438503:web:9d6996795baf1303cb2a82',
    measurementId: 'G-DQMB4B9B9W',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
