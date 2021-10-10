import { useState, useEffect } from "react";
import immortalKombatImg from "../img/project-images/immortal-kombat.png";
import techBlogImg from "../img/project-images/tech-blog.png";
import headquartersImg from "../img/project-images/headquarters.png";
import MMMFarmImg from "../img/project-images/project1-homepage.png";
import weatherDashboardImg from "../img/project-images/weather-dashboard.png";
import TeamProfileImg from "../img/project-images/team-profile-gen.png";
import BudgetImg from "../img/project-images/budget-tracker.png";

import github2 from "../img/logos/github2.png";

export default function Projects() {
  const style = {
    textDecoration: "none",
  };
  const [count, setCount] = useState(0);

  const [projectTitle, setProjectTitle] = useState("Tech Blog");
  const [image, setImage] = useState(techBlogImg);
  const [alt, setAlt] = useState("Image of the Tech Blog create post page");
  const [application, setApplication] = useState(
    "https://bobbies-tech-blog.herokuapp.com/"
  );
  const [github, setGithub] = useState(
    "https://github.com/Robert-Rousset/Tech-Blog"
  );

  function incrementCount() {
    if (count > 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  function decrementCount() {
    if (count < 1) {
      setCount(6);
    } else {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    renderProject();
  }, [count]);

  const renderProject = () => {
    if (count === 0) {
      setProjectTitle("Immortal Kombat");
      setImage(immortalKombatImg);
      setAlt("Screenshot of my Immortal Kombat Game");
      setApplication("https://immortal-kombat.herokuapp.com/");
      setGithub("https://github.com/Robert-Rousset/immortal-kombat");
    }
    if (count === 1) {
      setProjectTitle("Tech Blog");
      setImage(techBlogImg);
      setAlt("Image of the Tech Blog create post page");
      setApplication("https://bobbies-tech-blog.herokuapp.com/");
      setGithub("https://github.com/Robert-Rousset/Tech-Blog");
    }
    if (count === 2) {
      setProjectTitle("Headquarters");
      setImage(headquartersImg);
      setAlt("Image of the Headquarters landing page");
      setApplication("https://safe-beach-27101.herokuapp.com/");
      setGithub("https://github.com/Robert-Rousset/headquarters");
    }
    if (count === 3) {
      setProjectTitle("MMM Farm Online Store");
      setImage(MMMFarmImg);
      setAlt("Image of my Project 1 application");
      setApplication("https://robert-rousset.github.io/MMM-Farm-App/");
      setGithub("https://github.com/Robert-Rousset/MMM-Farm-App");
    }
    if (count === 4) {
      setProjectTitle("Weather Dashboard");
      setImage(weatherDashboardImg);
      setAlt("Image of my Weather Dashboard application");
      setApplication("https://robert-rousset.github.io/Weather-Dashboard/");
      setGithub("https://github.com/Robert-Rousset/Weather-Dashboard");
    }
    if (count === 5) {
      setProjectTitle("Team Profile Generator");
      setImage(TeamProfileImg);
      setAlt("Image of the Generated Team Profile");
      setApplication(
        "https://robert-rousset.github.io/Team-Profile-Generator/"
      );
      setGithub("https://github.com/Robert-Rousset/Team-Profile-Generator");
    }
    if (count === 6) {
      setProjectTitle("Budget Tracker App");
      setImage(BudgetImg);
      setAlt("Image of my Budget Tracker application");
      setApplication("https://bobs-budgets.herokuapp.com/");
      setGithub("https://github.com/Robert-Rousset/Budget-Tracker");
    }
  };
  return (
    <section id="work">
      <h2>My Work</h2>

      <article className="work">
        <div className="next">
          <button className="button1" onClick={decrementCount}>
            &lt;
          </button>
        </div>

        <div className="work-container">
          <div className="workCard">
            <img className="projectImage" src={image} alt={alt} />
            <a
              className="overlay"
              href={application}
              rel="noopener noreferrer"
              target="_blank"
              style={style}
            >
              <p className="project-text">
                {projectTitle}
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <img src={github2} className="github" alt="The Github logo" />
                </a>
              </p>
            </a>
          </div>
        </div>

        <div className="next">
          <button className="button1" onClick={incrementCount}>
            &gt;
          </button>
        </div>
      </article>
    </section>
  );
}
