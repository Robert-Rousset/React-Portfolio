import techblog from "../../img/project-images/tech-blog-homepage.png";

export default function TechBlog() {
  return (
    <div className="workCard">
      <a href="https://bobbies-tech-blog.herokuapp.com/" target="_blank">
        <img
          className="projectImage"
          src={techblog}
          alt="Image of the Tech Blog application"
        />
        <p>Tech Blog</p>
      </a>
    </div>
  );
}
