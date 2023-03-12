import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation';
import Home from './components/routes/home/home';
import Shop from './shop/shop';
import SignIn from './components/sign-in/sign-in';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
