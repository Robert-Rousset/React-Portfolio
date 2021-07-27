import project1 from "../../img/project-images/project1-homepage.png";

export default function TechBlog() {
  return (
    <div className="workCard">
      <a href="https://robert-rousset.github.io/MMM-Farm-App/" target="_blank">
        <img
          className="projectImage"
          src={project1}
          alt="Image of my Project 1 application"
        />
        <p>Project 1</p>
      </a>
    </div>
  );
}
