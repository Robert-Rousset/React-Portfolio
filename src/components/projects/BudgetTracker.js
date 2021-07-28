import BudgetImg from "../../img/project-images/budget-tracker.png";
import github2 from "../../img/logos/github2.png";

export default function BudgetTracker() {
  const style = {
    textDecoration: "none",
  };
  return (
    <div className="workCard">
      <img
        className="projectImage"
        src={BudgetImg}
        alt="Image of my Budget Tracker application"
      />
      <a
        className="overlay"
        href="https://bobs-budgets.herokuapp.com/"
        target="_blank"
        style={style}
      >
        <p className="project-text">
          Budget Tracker
          <a
            href="https://github.com/Robert-Rousset/Budget-Tracker"
            target="_blank"
          >
            <img src={github2} className="github" />
          </a>
        </p>
      </a>
    </div>
  );
}
