import CategoryItem from '../category-item/category-item';
import './directory.css';

const Directory = ({ categories }) => {
	return (
		<div className='categories-container'>
			{categories.map((el) => (
				<CategoryItem key={el.id} {...el} />
			))}
		</div>
	);
};

export default Directory;
