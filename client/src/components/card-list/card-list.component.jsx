import './card-list.style.css';

import Card from '../card/card.component';

const CardList = ({ monsters }) => {
	return (
		<div className='card-list'>
			{monsters.map((el, i) => (
				<Card key={i} monster={el} />
			))}
		</div>
	);
};

// class CardList extends Component {
// 	render() {
// 		const { monsters } = this.props;

// 		return (
// 			<div className='card-list'>
// 				{monsters.map((el, i) => (
// 					<Card key={i} monster={el} />
// 				))}
// 			</div>
// 		);
// 	}
// }

export default CardList;
