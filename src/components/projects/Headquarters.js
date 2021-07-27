import headquartersImg from "../../img/project-images/headquarters.png";

export default function Headquarters() {
  return (
    <div className="workCard">
      <a href="https://safe-beach-27101.herokuapp.com/" target="_blank">
        <img
          className="projectImage"
          src={headquartersImg}
          alt="Image of my Headquarters application"
        />
        <a href="https://github.com/Robert-Rousset/headquarters">GITHUB</a>
        <p>Headquarters</p>
      </a>
    </div>
  );
}
