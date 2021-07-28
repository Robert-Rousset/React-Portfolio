import headquartersImg from "../../img/project-images/headquarters.png";
import github2 from "../../img/logos/github2.png";

export default function Headquarters() {
  const style = {
    textDecoration: "none",
  };
  return (
    <div className="workCard">
      <img
        className="projectImage"
        src={headquartersImg}
        alt="Image of my Headquarters application"
      />
      <a
        className="overlay"
        href="https://safe-beach-27101.herokuapp.com/"
        target="_blank"
        style={style}
      >
        <p className="project-text">
          Headquarters
          <a
            href="https://github.com/Robert-Rousset/headquarters"
            target="_blank"
          >
            <img src={github2} className="github" />
          </a>
        </p>
      </a>
    </div>
  );
}
