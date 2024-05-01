import "./ActivityBar.css";

function Editor({ percentage }) {

    const textColor = percentage > 57 ? "white" : "black";

    return (
        <>
            <div className="activity-bar">
                <div className="activity-bar-box">
                    <div className="activity-bar-fill" style={{ width: `${percentage}%` }} />
                    <h1 className="activity-bar-text" style={{ color: textColor }}>{`${percentage} %`}</h1>
                </div>
            </div>
        </>
    )
}

export default Editor;