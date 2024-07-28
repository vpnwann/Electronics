import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getDatabase, ref, query, orderByChild, equalTo, get , onValue} from "firebase/database";
const firebaseConfig = {
 
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, ref, query, orderByChild, equalTo, get, onValue, auth};