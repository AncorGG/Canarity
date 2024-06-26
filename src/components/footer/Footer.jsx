import "./Footer.css"
import * as Icon from "react-bootstrap-icons"
import { Link } from 'react-router-dom';


function Footer() {
	return (
		<div className="footer-section">
			<div className="footer-info">
				<div className="footer-info-part">
					<p>Info</p>
					<p><Link to="/home">About Us</Link></p>
					<p><Link to="/home#faq">FAQ</Link></p>
				</div>
				<div className="footer-info-part">
					<p>Other Pages</p>
					<p><Link to="/health">Health</Link></p>
					<p><Link to="/activity">Activity</Link></p>
				</div>
				<div className="footer-info-part">
					<p><Icon.CCircle/>2024 Derechos Reservados</p>
					<p><a href="https://commission.europa.eu/cookies-policy_en" target="blank"> Policy of Privacy & Cookies</a></p>
					<p><a href="https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/selling-products-eu/index_en.htm" target="blank"> Condiciones de Venta</a></p>
				</div>
			</div>
			<div className="footer-icon-section">
				<div className="footer-logo-section">
					<img src="/icons/logo-black.png" alt="Canarity logo" className="footer-logo" />
					<h5>Canarity</h5>
				</div>
				<div className="footer-icons">
					<a href="https://github.com/AncorGG" target="blank" className="footer-icon"><Icon.Github /></a>
					<a href="https://www.figma.com/file/BUvGAkha8sdOpJB1d4ZuVZ/Canarity!?type=design&node-id=0%3A1&mode=design&t=XQ7pavzJ2RYQN7zR-1" target="blank" className="footer-icon"><i className="gg-figma"/></a>
					<a href="https://www.linkedin.com/in/ancor-garcía-guedes-43a42a223/" target="blank" className="footer-icon"><Icon.Linkedin /></a>
					<a href="https://canarity-69ee7.web.app/rss/health_rss.xml" target="blank" className="footer-icon"><Icon.RssFill /></a>
				</div>
			</div>
		</div>
	)
}

export default Footer;