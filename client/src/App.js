import React from 'react';
import './categories.css';

const App = () => {
	const category = [
		{ id: 1, title: 'Hats' },
		{ id: 2, title: 'Jackets' },
		{ id: 3, title: 'Sneakers' },
		{ id: 4, title: 'Womens' },
		{ id: 5, title: 'Mens' },
	];

	return (
		<div className='categories-container'>
			{category.map((el) => (
				<div key={el.id} className='category-container'>
					{/* <img src="" alt="" /> */}
					<div className='background-image' />
					<div className='category-body-container'>
						<h2>{el.title}</h2>
						<p>Shop Now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
