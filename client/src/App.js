import { useState, useEffect } from 'react';
// import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';
import './App.css';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filtered, setFiltered] = useState(monsters);

	const handleChange = (e) => {
		setSearchField(e.target.value.toLowerCase());
	};

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((res) => setMonsters((prev) => [...res]))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		const filteredResult = monsters.filter((el) =>
			el.name.toLowerCase().includes(searchField)
		);

		setFiltered((prev) => [...filteredResult]);
	}, [monsters, searchField]);

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBar
				handleChange={handleChange}
				placeholder='search monsters'
				className='search-box'
			/>
			<CardList monsters={filtered} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: '',
// 		};
// 	}

// 	handleChange = (e) => {
// 		const searchField = e.target.value.toLowerCase();

// 		this.setState(
// 			() => {
// 				return { searchField };
// 			},
// 			() => console.log(this.state)
// 		);
// 	};

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((res) => res.json())
// 			.then((res) => {
// 				this.setState(function (state) {
// 					return {
// 						...state,
// 						monsters: res,
// 					};
// 				});
// 			})
// 			.catch((err) => console.log(err));
// 	}

// 	render() {
// 		const filtered = this.state.monsters.filter((el) =>
// 			el.name.toLowerCase().includes(this.state.searchField)
// 		);

// 		return (
// 			<div className='App'>
// 				<h1 className='app-title'>Monsters Rolodex</h1>
// 				<SearchBar
// 					handleChange={this.handleChange}
// 					placeholder='search monsters'
// 					className='search-box'
// 				/>
// 				<CardList monsters={filtered} />
// 			</div>
// 		);
// 	}
// }

export default App;
