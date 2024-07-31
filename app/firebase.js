import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getDatabase, ref, query, orderByChild, equalTo, get , onValue} from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyCaCWbUjctmTLJJ2gLZVmODLUHubqLWNGU",
    authDomain: "abup-e3b67.firebaseapp.com",
    databaseURL: "https://abup-e3b67-default-rtdb.firebaseio.com",
    projectId: "abup-e3b67",
    storageBucket: "abup-e3b67.appspot.com",
    messagingSenderId: "100495781502",
    appId: "1:100495781502:web:df32430fd006a771e9b22f"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, ref, query, orderByChild, equalTo, get, onValue, auth};