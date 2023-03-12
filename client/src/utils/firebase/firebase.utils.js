// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

// Your web app's Firebase configuration; we get this information when we crate our project in FIREBASE
const firebaseConfig = {
	apiKey: 'AIzaSyCjv5iokdRAcGNKGCO-irSjNOcxo7UV_x4',
	authDomain: 'crwn-clothing-db-b1fea.firebaseapp.com',
	projectId: 'crwn-clothing-db-b1fea',
	storageBucket: 'crwn-clothing-db-b1fea.appspot.com',
	messagingSenderId: '1096857807105',
	appId: '1:1096857807105:web:2536abccc5b7806da29300',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
	console.log('userAuth::: ', userAuth);
	// we get this current user from collection USERS, even if this collection does not exist yet. this is how GOOGLE works. it give us an ID
	const userDocRef = doc(db, 'users', userAuth.uid);
	console.log('userDocRef ', userDocRef);
	// this is a current user document, and again we have a snapshot even that this USER is not yet in our collection. we can aply method exists() to see if this user has been created or not
	const userSnapshot = await getDoc(userDocRef);
	console.log('userSnapshot: ', userSnapshot.exists());

	// if user data does not exits
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			// crate / set the document with the data from userAuth in my collection 'USERS'
			await setDoc(userDocRef, { displayName, email, createdAt });
		} catch (error) {
			console.error('error creating the user: ', error.message);
		}
	}

	// if user data exists
	return userDocRef;
};
