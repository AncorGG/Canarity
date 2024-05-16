import CardHeader from "../../components/cards/CardHeader";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import * as Icon from 'react-bootstrap-icons';
import "./HomePage.css";

function HomePage() {

  const activateAnswers = (id) => {
    let answer = document.getElementById(id);
    answer.classList.toggle('active')
  }

  return (
    <>
      <Header />

      <div className="homepage-section">
        <h1 className="homepage-title">Canarity!</h1>
        <p className="homepage-subtitle">Set Sail to Health and Vitality</p>
        <a href="/assistance"><button className="homepage-btn">Sign Up</button></a>
      </div>

      <CardHeader></CardHeader>

      <div className="homepage-faq-section" id="faq">
        <h1 className="homepage-faq-title"> <i className="homepage-dot"><Icon.Dot /></i> FAQ</h1>
        <div className="homepage-question">
          <h4>Is this the firs question of the webpage?</h4>
          <i className="homepage-plus-icon" onClick={() => activateAnswers(1)}><Icon.DashCircleFill /></i>
        </div>
        <div id="1" className="homepage-awnser active">
          <p>Yes, Of course it is, what else could it be you moron?  Loadnasjdn oawind ajsndoiauwndoakjwdmnoai . . . </p>
        </div>
        <div className="homepage-question">
          <h4>Is this the first question of the webpage?</h4>
          <i className="homepage-plus-icon" onClick={() => activateAnswers(2)}><Icon.DashCircleFill /></i>
        </div>
        <div id="2" className="homepage-awnser">
          <p>Yes, Of course it is, what else could it be you moron?  Loadnasjdn oawind ajsndoiauwndoakjwdmnoai . . . </p>
        </div>
        <div className="homepage-question">
          <h4>Is this the first question of the webpage?</h4>
          <i className="homepage-plus-icon" onClick={() => activateAnswers(3)}><Icon.DashCircleFill /></i>
        </div>
        <div id="3" className="homepage-awnser">
          <p>Yes, Of course it is, what else could it be you moron?  Loadnasjdn oawind ajsndoiauwndoakjwdmnoai . . . </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
