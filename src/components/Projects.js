import { useState } from "react";
import TechBlog from "./projects/TechBlog";
import MMMFarm from "./projects/MMMFarm";
import Headquarters from "./projects/Headquarters";
import TeamProfileGenerator from "./projects/TeamProfileGenerator";
import WeatherDashboard from "./projects/WeatherDashboard";
import BudgetTracker from "./projects/BudgetTracker";

export default function Projects() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    if (count >= 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  function decrementCount() {
    if (count <= 0) {
      setCount(5);
    } else {
      setCount(count - 1);
    }
  }

  const renderProject = () => {
    if (count === 0) {
      return (
        <div>
          <TechBlog />
        </div>
      );
    }
    if (count === 1) {
      return (
        <div>
          <MMMFarm />
        </div>
      );
    }
    if (count === 2) {
      return (
        <div>
          <Headquarters />
        </div>
      );
    }
    if (count === 3) {
      return (
        <div>
          <BudgetTracker />
        </div>
      );
    }
    if (count === 4) {
      return (
        <div>
          <TeamProfileGenerator />
        </div>
      );
    }
    if (count === 5) {
      return (
        <div>
          <WeatherDashboard />
        </div>
      );
    }
  };
  return (
    <section id="work">
      <h2>My Work</h2>

      <article className="work">
        {count}
        <p className="previous">
          <button className="button" onClick={decrementCount}>
            &lt;
          </button>
        </p>
        <div className="work-container">{renderProject()}</div>
        <p className="next">
          <button className="button" onClick={incrementCount}>
            &gt;
          </button>
        </p>
      </article>
    </section>
  );
}
