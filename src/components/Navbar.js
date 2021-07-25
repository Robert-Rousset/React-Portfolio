export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <aside className="navbar">
      <a href="#AboutMe" onClick={() => handlePageChange("AboutMe")}>
        <button
          className="button"
          id={currentPage === "AboutMe" ? "active" : ""}
        >
          About Me
        </button>
      </a>
      <a href="#Projects" onClick={() => handlePageChange("Projects")}>
        <button
          className="button"
          id={currentPage === "Projects" ? "active" : ""}
        >
          My Work
        </button>
      </a>
      <a href="#Contact" onClick={() => handlePageChange("Contact")}>
        <button
          className="button"
          id={currentPage === "Contact" ? "active" : ""}
        >
          Contact
        </button>
      </a>
    </aside>
  );
}
