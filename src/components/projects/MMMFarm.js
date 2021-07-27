import MMMFarmImg from "../../img/project-images/project1-homepage.png";

export default function MMMFarm() {
  return (
    <div className="workCard">
      <a href="https://robert-rousset.github.io/MMM-Farm-App/" target="_blank">
        <img
          className="projectImage"
          src={MMMFarmImg}
          alt="Image of my Project 1 application"
        />
        <a href="https://github.com/Robert-Rousset/MMM-Farm-App">GITHUB</a>
        <p>MMM Farm Online Store</p>
      </a>
    </div>
  );
}
