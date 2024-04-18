import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import health_cards from "../../../models/health_cards";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./HealthPage.css"

export function capitalize(word) {
	return word.replace(/^./, word[0].toUpperCase());
}

function HealthPage() {

	const [searchText, setSearchText] = useState('');
	const [filteredCards, setFilteredCards] = useState([]);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchText(event.target.value);
		const filtered = health_cards.filter(card => card.name.startsWith(event.target.value.toLowerCase()))
		setFilteredCards(filtered);
	};

	const handleOnClick = (medicName, url) => {
		console.log(medicName);
		navigate('/consults/:'+medicName+'/:'+url);
	}

	return (
		<>
			<Header />

			<div className="health-search-section">
				<div className="health-search-bar">
					<input type="text" name="Search for Specialist" id="search-specialist" value={searchText} onChange={handleSubmit} placeholder="Search Specialist"/>
					<button type="submit" className="search-btn"><Icon.Search /></button>
				</div>
			</div>

			<div className="health-containers">

				{(searchText === "" ? health_cards : filteredCards).map((card, id) => {
					return (
						<div className="health-container" key={id} onClick={() => handleOnClick(card.name, card.url)}>
							<div className="health-container-upper">
								<h1 className="health-container-name">{capitalize(card.name)}</h1>
							</div>
							<img className="health-container-image" src={'./images/' + card.url} alt={card.name} />
						</div>
					);
				})}

				{
					!health_cards.some((card, id) => card.name.startsWith(searchText.toLowerCase())) && (
						<div>
							<h1>Specialist Not Found</h1>
						</div>
					)
				}

			</div>
			<Footer />
		</>
	);
}

export default HealthPage;