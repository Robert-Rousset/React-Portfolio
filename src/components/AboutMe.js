import profilePic from "../img/profile-pic.jpg";
import resume from "./resume/Robert-Rousset-Resume.pdf";

export default function AboutMe() {
  return (
    <section id="aboutme">
      <h2>About Me</h2>

      <article className="aboutme">
        <div className="card">
          <div className="bio">
            <p>
              Full stack Web Developer with a strong desire to create unique and
              meaningful online user experiences. With a background in graphic
              design and music I have a passion to produce artistic and creative
              web applications. Eager to learn new skills and grow as I embark
              on my journey as a Web Developer! I enjoy video games, music,
              snowboarding and painting.
            </p>
          </div>
        </div>
        <figure>
          <img
            class="profilePic"
            src={profilePic}
            alt="Robert Rousset's face"
          />
        </figure>
      </article>
      <div id="resume">
        <a href={resume} rel="noopener noreferrer" target="_blank">
          <button className="resume">Resume</button>
        </a>
      </div>
    </section>
  );
}
