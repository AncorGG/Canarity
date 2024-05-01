import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import activitiesService from "../../../services/firebase/activities.service";
import ActivityItem from "../../../components/activity/activity-item/ActivityItem";
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import "./Editor.css"

function Editor() {

	const { key } = useParams();
	const activityKey = key;

	const [activities, setActivities] = useState([]);

	const selectedActivity = activities.find(activity => activity.key === activityKey);
	const [activityName, setActivityName] = useState('');
	const [activityDescription, setActivityDescription] = useState('');

	useEffect(() => {
		if (selectedActivity) {
			setActivityName(selectedActivity.name);
			setActivityDescription(selectedActivity.description);
		}
	}, [selectedActivity]);

	useEffect(() => {

		activitiesService.getAllActivities().then(items => {
			let auxActivities = [];
			items.forEach(item => {
				const key = item.key;
				const data = item.val();

				auxActivities.push(
					{
						key: key,
						name: data.name,
						value: data.value,
						description: data.description
					}
				);
			})

			setActivities(auxActivities);
		});

	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (selectedActivity) {
			await activitiesService.updateActivity(selectedActivity.key, {
				name: activityName,
				value: 0,
				description: activityDescription
			});
			window.location.href = "/activity";
		} else {
			await activitiesService.createActivity({
				name: activityName,
				value: 0,
				description: activityDescription
			});
			window.location.href = "/activity";
		}
	}

	const handleDelete = () => {
		if (selectedActivity) {
			activitiesService.deleteActivity(selectedActivity.key).then(() => {
				window.location.href = "/activity";
			}).catch(error => {
				console.error("Error deleting activity:", error);
			});
		}
	}

	return (
		<>
			<Header />
			<div className="editor-body-section">
				<form onSubmit={handleSubmit}>

					<div className="editor-title">
						<input type="text" className="editor-text" placeholder="Activity Text . . . " name="name" id="name" value={activityName} onChange={(e) => setActivityName(e.target.value)} />
						<Icon.Pen />
					</div>

					<div className="editor-description">
						<ul className="editor-description-title">
							<li>Description</li>
						</ul>
						<textarea className="editor-text" name="description" id="description" placeholder="Description Text . . ." value={activityDescription} onChange={(e) => setActivityDescription(e.target.value)} />
					</div>

					<div className="editor-submition">
						<button className="editor-submit-btn" id="delete" type="button" onClick={handleDelete}><Icon.Trash /></button>
						<button className="editor-submit-btn" id="send" type="submit"><Icon.Check2All /></button>
					</div>

				</form>
			</div>
			<div className="activity-list">
				<p className="editor-list-title">Activity List</p>
				{
					activities.map((a) => (
						<ActivityItem key={a.key} activity={a} selectedKey={a.key} />
					))
				}
			</div>

			<Footer />
		</>
	)
}

export default Editor;