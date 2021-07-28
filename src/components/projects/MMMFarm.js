import MMMFarmImg from "../../img/project-images/project1-homepage.png";
import github2 from "../../img/logos/github2.png";

export default function MMMFarm() {
  const style = {
    textDecoration: "none",
  };
  return (
    <div className="workCard">
      <img
        className="projectImage"
        src={MMMFarmImg}
        alt="Image of my Project 1 application"
      />
      <a
        className="overlay"
        href="https://robert-rousset.github.io/MMM-Farm-App/"
        target="_blank"
        style={style}
      >
        <p className="project-text">
          MMM Farm Online Store
          <a
            href="https://github.com/Robert-Rousset/MMM-Farm-App"
            target="_blank"
          >
            <img src={github2} className="github" />
          </a>
        </p>
      </a>
    </div>
  );
}
