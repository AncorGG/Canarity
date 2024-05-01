import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import ActivityBar from "../../../components/activity/activity-bar/ActivityBar";
import ActivityItem from "../../../components/activity/activity-item/ActivityItem";
import activitiesService from "../../../services/firebase/activities.service"
import { useEffect, useLayoutEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import "./Activity.css"

function Activity() {

  const [activities, setActivities] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);
  const [percentage, setPercentage] = useState(0);


  const initiatePercentage = () => {
    let countValue = activities.filter(activity => activity.value === 2).length;
    let totalActivities = activities.length;

    if (totalActivities > 0) {
      setPercentage(Math.round((countValue / totalActivities) * 100));
    }
  }
  
  const handleValueChange = (activityKey, newValue) => {
    activitiesService.updateActivityValue(activityKey, newValue)

    setActivities(prevActivities => prevActivities.map(activity => {
      if (activity.key === activityKey) {
        return { ...activity, value: newValue };
      }
      return activity;
    }));

  };

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


  useLayoutEffect(() => {

    const handleClick = (event) => {
      const clickedItem = event.target;

      if (clickedItem.classList.contains('activity-list-item')) {
        document.querySelectorAll('.activity-list-item').forEach(item => {
          item.classList.remove('activity-selected')
        });

        clickedItem.classList.add('activity-selected');
        setSelectedKey(clickedItem.getAttribute('data-key'));
      }
    };

    const activityItems = document.querySelectorAll('.activity-list-item');
    activityItems.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    initiatePercentage();

  }, [activities]);

  return (
    <>
      <Header />
      <ActivityBar percentage={percentage} />
      <div className="activity-list">
        <div className="activity-list-header">
          <h5 className="activity-list-title">Activity List</h5>
          <div className="activity-list-header-icons">
            <a href="/editor/null"><i className="icon-add"><Icon.PlusCircle /></i></a>
            <i className="icon-filter"><Icon.Filter /></i>
          </div>
        </div>
        {
          activities.map((a) => (
            <ActivityItem key={a.key} activity={a} selectedKey={selectedKey} onValueChange={handleValueChange} />
          ))
        }

      </div>
      <Footer />
    </>
  );
}

export default Activity;