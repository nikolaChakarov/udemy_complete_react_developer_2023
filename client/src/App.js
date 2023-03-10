import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation';
import Home from './components/routes/home/home';
import Shop from './shop/shop';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='/shop' element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
