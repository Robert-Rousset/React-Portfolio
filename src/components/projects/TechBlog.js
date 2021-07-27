import techBlogImg from "../../img/project-images/tech-blog-homepage.png";

export default function TechBlog() {
  return (
    <div className="workCard">
      <a href="https://bobbies-tech-blog.herokuapp.com/" target="_blank">
        <img
          className="projectImage"
          src={techBlogImg}
          alt="Image of the Tech Blog application"
        />
        <a href="https://github.com/Robert-Rousset/Tech-Blog">GITHUB</a>
        <p>Tech Blog</p>
      </a>
    </div>
  );
}
