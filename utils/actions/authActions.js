import { getFirebaseApp } from "../firebaseHelper"
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'

export const signup = async (firstname,lastname, email, password) => {
    console.log("email pwd ",email,password);
    const app = getFirebaseApp();
    
    const auth = getAuth(app);
    console.log('app : ',auth);
    try {
        const result = await createUserWithEmailAndPassword(auth,email,password);
        console.log('result : ',result);
    } catch (error) {
        console.error('error in authActions ', error);
    }
}

export const singin = (email, password) => {
    
}