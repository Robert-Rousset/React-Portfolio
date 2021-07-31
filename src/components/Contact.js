import phone from "../img/logos/phone.png";
import email from "../img/logos/email.png";
import github from "../img/logos/github.png";
import linkedin from "../img/logos/linkedin.png";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <article className="contact">
        <div className="contactImgBox">
          <img src={phone} />
          <a
            href="https://www.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} />
          </a>
          <a
            href="https://github.com/Robert-Rousset"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-rousset-3a8300193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} />
          </a>
        </div>

        <div className="contactBox">
          <p>0499992840</p>

          <p>
            <a
              href="https://www.gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              robertrousset94@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Robert-Rousset"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/robert-rousset-3a8300193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com
            </a>
          </p>
        </div>
      </article>
    </section>
  );
}
