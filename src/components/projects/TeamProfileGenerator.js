import TeamProfileImg from "../../img/project-images/team-profile-gen.png";

import github2 from "../../img/logos/github2.png";

export default function TeamProfileGenerator() {
  const style = {
    textDecoration: "none",
  };
  return (
    <div className="workCard">
      <img
        className="projectImage"
        src={TeamProfileImg}
        alt="Image of my Project 1 application"
      />
      <a
        className="overlay"
        href="https://robert-rousset.github.io/Team-Profile-Generator/"
        target="_blank"
        style={style}
      >
        <p className="project-text">
          Team Profile Generator
          <a
            href="https://github.com/Robert-Rousset/Team-Profile-Generator"
            target="_blank"
          >
            <img src={github2} className="github" />
          </a>
        </p>
      </a>
    </div>
  );
}
