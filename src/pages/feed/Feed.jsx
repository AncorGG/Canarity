import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import xml2js from 'xml-js';
import * as Icon from 'react-bootstrap-icons';
import "./Feed.css";

function Feed() {

	const [rssData, setRssData] = useState(null);
	const [loadNumber, setLoadNumber] = useState(10);

	useEffect(() => {
		const fetchRssData = async () => {
			try {
				const response = await fetch('https://canarity-69ee7.web.app/rss/health_rss.xml');
				const xml = await response.text();
				const jsonData = xml2js.xml2json(xml, { compact: true, spaces: 4 });
				setRssData(JSON.parse(jsonData));
			} catch (error) {
				console.error('Error fetching RSS Data: ', error);
			}
		};

		fetchRssData();
	}, [])

	const loadMore = () => {
		setLoadNumber(loadNumber + 10);
	}

	const getRandomImageSrc = () => {
        const randomIndex = Math.floor(Math.random() * 3) + 1;
        return `/images/image${randomIndex}.jpg`;
    }

	return (
		<>
			<Header />
			<div className="feed-section-title">
				<h1>{rssData ? rssData.rss.channel.title._text : 'RSS Feed'}</h1>
			</div>
			<div className="feed-section">

				{rssData ? (
					<div className="feed-containers">
						{rssData.rss.channel.item.slice(0, loadNumber).map((item, index) => (
							<div className="feed-container" key={index}>
								<div className="feed-container-upper">
									<h2>{item.title._text}</h2>
									<p>{item.description._text}</p>
									<a href={item.link._text} target="_blank">Read more</a>
								</div>
								<img className="feed-container-image" src={getRandomImageSrc()} alt="image" />
							</div>
						))}
					</div>
				) : (
					<p>Loading...</p>
				)}
				{rssData && loadNumber < rssData.rss.channel.item.length && (
					<button className="feed-btn" onClick={loadMore}><i className="feed-plus"><Icon.Plus /></i></button>
				)}
			</div>
			<Footer />
		</>
	)
}

export default Feed;