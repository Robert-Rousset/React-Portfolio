import TeamProfileImg from "../../img/project-images/team-profile-gen.png";

export default function TeamProfileGenerator() {
  return (
    <div className="workCard">
      <a href="https://robert-rousset.github.io/MMM-Farm-App/" target="_blank">
        <img
          className="projectImage"
          src={TeamProfileImg}
          alt="Image of my Project 1 application"
        />
        <a href="https://github.com/Robert-Rousset/Team-Profile-Generator">
          GITHUB
        </a>
        <p>Team Profile Generator</p>
      </a>
    </div>
  );
}
