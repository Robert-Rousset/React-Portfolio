import profilePic from "../img/profile-pic.jpg";
import resume from "./resume/Web-Development-Resume.pdf";

export default function AboutMe() {
  return (
    <section id="aboutme">
      <h2>About Me</h2>

      <article className="aboutme">
        <div className="card">
          <div className="bio">
            <p>
              Hey my name is Rob and im studying to be a Web Developer.
              Throughout my course I have learnt the fundamentals of HTML, CSS
              and Javascript. These skills have made me a proficient Web
              Developer and a very capable software designer. My Hobbies include
              Music, Video Games, Art, Snowboarding and Coding!
            </p>
          </div>
        </div>
        <figure>
          <img
            class="profilePic"
            src={profilePic}
            alt="Image of me (Robert Rousset)"
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
