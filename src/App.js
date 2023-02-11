import './App.css';
import styled from 'styled-components';
import CardComponent from './components/CardComponent';
import SedansImage from './images/icon-sedans.svg';
import SuvsImage from './images/icon-suvs.svg';
import LuxuryImage from './images/icon-luxury.svg';

const Container = styled.div`
	margin-top: 6rem;
	margin-bottom: 6rem;
	display: flex;
	flex-direction: column;
	margin-left: 2rem;
	margin-right: 2rem;
	border-radius: 11px;
	overflow: hidden;

	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}

	@media only screen and (min-width: 1024px) {
		margin-left: 8rem;
		margin-right: 8rem;
	}

	@media only screen and (min-width: 1280px) {
		margin-left: 16rem;
		margin-right: 16rem;
	}

	@media only screen and (min-width: 1440px) {
		margin-left: 20rem;
		margin-right: 20rem;
	}
`;

function App() {
	const cardsData = [
		{
			image: SedansImage,
			title: "SEDANS",
			description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
			borderRadius: '0.375rem 0.375rem 0 0',
			color: 'hsl(31, 77%, 52%)'
		},
		{
			image: SuvsImage,
			title: "SUVS",
			description: "Take an SUV for its spacious interior, power, and versality. Perfect for your next family vacation and off-road adventures.",
			borderRadius: '0',
			color: 'hsl(184, 100%, 22%)'
		},
		{
			image: LuxuryImage,
			title: "Luxury",
			description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
			borderRadius: '0 0 0.375rem 0.375rem',
			color: 'hsl(179, 100%, 13%)'
		}
	]

  return (
    <div className="App">
			<Container>
				{
					cardsData.map((cards, index) => {
						return (
							<CardComponent
								key={index}
								image= {cards.image}
								title= {cards.title}
								description= {cards.description}
								color= {cards.color}>
							</CardComponent>
						)
					})
				}
			</Container>
    </div>
  );
}

export default App;
