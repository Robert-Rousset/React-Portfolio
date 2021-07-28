import techBlogImg from "../../img/project-images/tech-blog-homepage.png";
import github2 from "../../img/logos/github2.png";

export default function TechBlog() {
  const style = {
    textDecoration: "none",
  };
  return (
    <div className="workCard">
      <img
        className="projectImage"
        src={techBlogImg}
        alt="Image of the Tech Blog application"
      />
      <a
        className="overlay"
        href="https://bobbies-tech-blog.herokuapp.com/"
        target="_blank"
        style={style}
      >
        <p className="project-text">
          Tech Blog
          <a href="https://github.com/Robert-Rousset/Tech-Blog" target="_blank">
            <img src={github2} className="github" />
          </a>
        </p>
      </a>
    </div>
  );
}
