import './search-bar.styles.css';

const SearchBar = ({ className, placeholder, handleChange }) => {
	return (
		<input
			className={className}
			type='search'
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
};

// class SearchBar extends Component {
// 	render() {
// 		return (
// 			<input
// 				className={this.props.className}
// 				type='search'
// 				placeholder={this.props.placeholder}
// 				onChange={this.props.handleChange}
// 			/>
// 		);
// 	}
// }

export default SearchBar;
