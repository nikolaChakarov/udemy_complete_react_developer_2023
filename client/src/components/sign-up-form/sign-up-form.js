import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import './sign-up-form.css';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor=''>Display Name</label>
			<input
				type='text'
				name='displayName'
				value={displayName}
				onChange={handleChange}
			/>

			<label htmlFor=''>Email</label>
			<input
				type='email'
				name='email'
				value={email}
				onChange={handleChange}
			/>

			<label htmlFor=''>Password</label>
			<input
				type='password'
				name='password'
				value={password}
				onChange={handleChange}
			/>

			<label htmlFor=''>Confirm Password</label>
			<input
				type='password'
				name='confirmPassword'
				value={confirmPassword}
				onChange={handleChange}
			/>

			<button type='submit'>Sign Up</button>
		</form>
	);
};

export default SignUpForm;
