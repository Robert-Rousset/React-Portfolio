import BudgetImg from "../../img/project-images/budget-tracker.png";

export default function BudgetTracker() {
  return (
    <div className="workCard">
      <a href="https://bobs-budgets.herokuapp.com/" target="_blank">
        <img
          className="projectImage"
          src={BudgetImg}
          alt="Image of my Budget Tracker application"
        />
        <a href="https://github.com/Robert-Rousset/Budget-Tracker">GITHUB</a>
        <p>Budget Tracker</p>
      </a>
    </div>
  );
}
