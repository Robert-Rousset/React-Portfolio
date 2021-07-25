export default function Navbar({ handlePageChange }) {
  return (
    <aside class="navbar">
      <a href="#AboutMe" onClick={() => handlePageChange("AboutMe")}>
        <button class="button">About Me</button>
      </a>
      <a href="#Projects" onClick={() => handlePageChange("Projects")}>
        <button class="button">My Work</button>
      </a>
      <a href="#Contact" onClick={() => handlePageChange("Contact")}>
        <button class="button">Contact</button>
      </a>
    </aside>
  );
}
