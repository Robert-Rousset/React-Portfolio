import weatherDashboardImg from "../../img/project-images/weather-dashboard.png";

export default function WeatherDashboard() {
  return (
    <div className="workCard">
      <a
        href="https://robert-rousset.github.io/Weather-Dashboard/"
        target="_blank"
      >
        <img
          className="projectImage"
          src={weatherDashboardImg}
          alt="Image of my Weather Dashboard application"
        />
        <a href="https://github.com/Robert-Rousset/Weather-Dashboard">GITHUB</a>
        <p>Weather Dashboard</p>
      </a>
    </div>
  );
}
