import weatherDashboardImg from "../../img/project-images/weather-dashboard.png";
import github2 from "../../img/logos/github2.png";

export default function WeatherDashboard() {
  const style = {
    textDecoration: "none",
  };
  return (
    <div className="workCard">
      <img
        className="projectImage"
        src={weatherDashboardImg}
        alt="Image of my Weather Dashboard application"
      />
      <a
        className="overlay"
        href="https://robert-rousset.github.io/Weather-Dashboard/"
        target="_blank"
        style={style}
      >
        <p className="project-text">
          Weather Dashboard
          <a
            href="https://github.com/Robert-Rousset/Weather-Dashboard"
            target="_blank"
          >
            <img src={github2} className="github" />
          </a>
        </p>
      </a>
    </div>
  );
}
