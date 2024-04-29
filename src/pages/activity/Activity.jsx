import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import * as Icon from "react-bootstrap-icons";
import "./Activity.css"

function Activity() {
  return (
    <>
      <Header />
      <div className="section">
        <h1 className="title">Work in Progress...</h1>
      </div>

      <div className="activity-list">
        <div className="activity-list-header">
          <h5 className="activity-list-title">Activity List</h5>
          <div className="activity-list-header-icons">
            <i className="icon-add"><Icon.PlusCircle/></i>
            <i className="icon-filter"><Icon.Filter/></i>
          </div>
        </div>
        <div className="activity-list-item activity-selected">
          <i className="icon-check"><Icon.Check2All/></i>
          <p>Morning Exercise</p>
          <i className="activity-dots"><Icon.ThreeDots/></i>
        </div>
        <div className="activity-list-item">
          <i className="icon-check"><Icon.Check2All/></i>
          <p>Morning Exercise</p>
          <i className="activity-dots"><Icon.ThreeDots/></i>
        </div>
        <div className="activity-list-item">
          <i className="icon-check"><Icon.Check2All/></i>
          <p>Morning Exercise</p>
          <i className="activity-dots"><Icon.ThreeDots/></i>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Activity;