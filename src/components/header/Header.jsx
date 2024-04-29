import "./Header.css";
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from "react";

function Header() {

	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		const pathname = window.location.pathname;
		const links = document.querySelectorAll('.header-link');

		links.forEach(link => {
			if (link.getAttribute('href') === pathname || (pathname.startsWith('/consult') && link.getAttribute('href') === '/health')) {
				link.classList.add('selected');
			}
			else {
				link.classList.remove('selected');
			}
		});
	}, [displayValue]);


	const alterHeader = () => {
		displayValue === 0 ? setDisplayValue(1) : setDisplayValue(0);
	}

	return (
		<div className="header-section">
			<div className="header-info">
				<i className="header-list-icon" onClick={alterHeader}><Icon.List /></i>
				<img src="/icons/logo-black.png" alt="Canarity logo" className="header-logo" />
				<a className="header-brand" href="/home">Canarity!</a>
				<i className="header-profile-icon"><Icon.PersonFill /></i>
			</div>
			{displayValue == 0 ? null :
				<div className="header-buttons">
					<a className="header-link" href="/health">Health</a>
					<a className="header-link" href="/activity">Activity</a>
					<a className="header-link" href="/assistance">Assistance</a>
					<a href="/assistance" className="header-link-button"><button className="header-login-btn">Sign Up</button></a>
					<i className="header-max-profile-icon"><Icon.PersonFill /></i>
				</div>
			}
		</div>
	);
}

export default Header;
