import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import consultCard from "../../../models/consult_cards";
import * as Icon from "react-bootstrap-icons"
import { useParams } from "react-router-dom";
import { capitalize } from "../main/HealthPage";
import "./ConsultPage.css";
import { Icon0SquareFill } from "react-bootstrap-icons";

function ConsultPage() {

	const { medic, url } = useParams();
	const medicValue = medic;
	const urlValue = url;
	const medicName = capitalize(medicValue);

	return (
		<>
			<Header />
			<div className="consult-selected" id="consult-start">
				<div className="consult-health-container" key='1'>
					<div className="consult-container-upper">
						<h1 className="consult-container-name">{medicName}</h1>
					</div>
					<img className="consult-container-image" src={'/images/' + urlValue} alt='a' />
				</div>
			</div>
			<div className="consult-card-section">
				{
					(consultCard.filter((consult) => consult.medic === medicValue)).map((consult, id) => {
						return (
							<div className="consult-card" key={id}>
								<h4>{consult.name}</h4>
								<div className="consult-item"><p><Icon.GeoAltFill />   {consult.location}</p></div>
								<div className="consult-item"><p><Icon.ClockFill />   {consult.schedule_hours}</p></div>
								<div className="consult-item"><p><Icon.TelephoneFill />   {consult.phone}</p></div>
								<div className="consult-item"><p><Icon.Globe2 />   {consult.web}</p></div>
							</div>
						)
					})
				}

				{
					!consultCard.some((consult) => consult.medic === medicValue) && (
						<div className="consult-not-found">
							<h1>Specialists Not Found</h1>
						</div>
					)
				}

			</div>
			<Footer />
		</>
	)
}

export default ConsultPage;