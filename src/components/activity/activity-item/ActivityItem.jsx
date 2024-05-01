import { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import "./ActivityItem.css"

function Activity({ activity, selectedKey, onValueChange }) {
    const [value, setValue] = useState(activity.value);

    const handleClick = () => {
        let newValue = (value + 1) % 3;
        setValue(newValue);
        onValueChange(activity.key, newValue);
    };

    return (
        <>
            <div className="activity-list-item" key={activity.key} data-key={activity.key}>
                <div className="activity-icon-holder" onClick={window.location.pathname.startsWith('/activity') ? handleClick : null}>
                    {value === 0 ? (<Icon.XLg className="icon-x activity-icons" />) : value === 1 ? 
                    (<Icon.Hourglass className="icon-hourglass activity-icons" />) : 
                    (<Icon.Check2All className="icon-check activity-icons" />)}
                </div>
                <div className="activity-icon-holder" onClick={handleClick}></div>
                <p>{activity.name}</p>
                {
                    activity.key === selectedKey ? (<a href={'/editor/' + selectedKey} className="activity-dots"><Icon.ThreeDots /></a>) : (null)
                }
            </div>
        </>
    )
}

export default Activity;