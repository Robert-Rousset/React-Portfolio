import TechBlog from "./projects/TechBlog";
// import Project1 from "./projects/Project1"
// import Project2 from "./projects/Project2"
// import TeamProfileGenerator from "./projects/TeamProfileGenerator"
// import WeatherDashboard from "./projects/WeatherDashboard"
// import BudgetTracker from "./projects/BudgetTracker"

export default function Projects() {
  return (
    <section id="work">
      <h2>My Work</h2>

      <article className="work">
        <p className="previous">
          <b>&lt;</b>
        </p>
        <div className="work-container">
          <TechBlog />

          {/* <Project1 />

          <Project2 />

          <TeamProfileGenerator />

          <WeatherDashboard />

          <BudgetTracker /> */}
        </div>
        <p className="next">
          <b>&gt;</b>
        </p>
      </article>
    </section>
  );
}
