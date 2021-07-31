import github from "../img/logos/github.png";
import linkedin from "../img/logos/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <h3>© 2020 Rob Design</h3>
      <br></br>
      <h3>
        <a
          href="https://github.com/Robert-Rousset"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github Logo" className="footerLogo" />
        </a>
        <a
          href="https://www.linkedin.com/in/robert-rousset-3a8300193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="Linkedin Logo" className="footerLogo" />
        </a>
      </h3>
    </footer>
  );
}
