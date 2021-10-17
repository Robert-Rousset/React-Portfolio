import { useState } from "react";
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

  const projectTitle = [
    "Immortal Kombat",
    "Tech Blog",
    "Headquarters",
    "MMM Farm Online Store",
    "Weather Dashboard",
    "Team Profile Generator",
    "Budget Tracker",
  ];
  const image = [
    immortalKombatImg,
    techBlogImg,
    headquartersImg,
    MMMFarmImg,
    weatherDashboardImg,
    TeamProfileImg,
    BudgetImg,
  ];
  const alt = [
    "Screenshot of my Immortal Kombat Game",
    "Image of the Tech Blog create post page",
    "Image of the Headquarters landing page",
    "Image of my Project 1 application",
    "Image of my Weather Dashboard application",
    "Image of the Generated Team Profile",
    "Image of my Budget Tracker application",
  ];
  const application = [
    "https://immortal-kombat.herokuapp.com/",
    "https://bobbies-tech-blog.herokuapp.com/",
    "https://safe-beach-27101.herokuapp.com/",
    "https://robert-rousset.github.io/MMM-Farm-App/",
    "https://robert-rousset.github.io/Weather-Dashboard/",
    "https://robert-rousset.github.io/Team-Profile-Generator/",
    "https://bobs-budgets.herokuapp.com/",
  ];
  const github = [
    "https://github.com/Robert-Rousset/immortal-kombat",
    "https://github.com/Robert-Rousset/Tech-Blog",
    "https://github.com/Robert-Rousset/headquarters",
    "https://github.com/Robert-Rousset/MMM-Farm-App",
    "https://github.com/Robert-Rousset/Weather-Dashboard",
    "https://github.com/Robert-Rousset/Team-Profile-Generator",
    "https://github.com/Robert-Rousset/Budget-Tracker",
  ];

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
            <img className="projectImage" src={image[count]} alt={alt[count]} />
            <a
              className="overlay"
              href={application[count]}
              rel="noopener noreferrer"
              target="_blank"
              style={style}
            >
              <p className="project-text">
                {projectTitle[count]}
                <a
                  href={github[count]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
