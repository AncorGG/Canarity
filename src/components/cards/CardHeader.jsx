import "./CardHeader.css";

function CardHeader() {
	return (
		<>
			<div className="card-section">
				<div className="home-card">
					<img src="./images/image1.jpg" alt="doctor_image_1" className="card-img" />
					<ul>
						<li className="card-text">Info & Tips</li>
						<li className="card-text">Search For Clinics</li>
					</ul>
					<a href="/health"  className="card-btn-fill"><button className="homepage-btn">Health</button></a>
				</div>
				<div className="home-card">
					<img src="./images/image2.jpg" alt="doctor_image_2" className="card-img" />
					<ul>
						<li className="card-text">Activity Tracking</li>
						<li className="card-text">Free Resources!</li>
					</ul>
					<a href="/activity" className="card-btn-fill"><button className="homepage-btn">Activity</button></a>
				</div>
				<div className="home-card">
					<img src="./images/image3.jpg" alt="doctor_image_3" className="card-img" />
					<ul>
						<li className="card-text">Appointments</li>
						<li className="card-text">Medicine Scheduler</li>
					</ul>
					<a href="/assistance"  className="card-btn-fill"><button className="homepage-btn">Assistance</button></a>
				</div>
			</div>
		</>
	)
}

export default CardHeader;