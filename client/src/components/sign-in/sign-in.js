// import { getRedirectResult } from 'firebase/auth';
import {
	// auth,
	signInWithGooglePopup,
	// signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../sign-up-form/sign-up-form';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	// need this flow if we use signInWithGoogleRedirect not if we use signInWithGooglePopup
	// const logGoogleRedirectUser = async () => {
	// 	const { user } = await signInWithGoogleRedirect();
	// 	console.log('user from redirect: ', user);
	// };
	// const initUser = async () => {
	// 	const response = await getRedirectResult(auth);
	// 	if (response) createUserDocumentFromAuth(response.user);
	// };
	// useEffect(() => {
	// 	initUser();
	// }, []);

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In with Google Popup</button>
			{/* <button onClick={logGoogleRedirectUser}>
				Sign In with Google Redirect
			</button> */}
			<SignUpForm />
		</div>
	);
};

export default SignIn;
