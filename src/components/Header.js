import Navbar from "./Navbar";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <header
        className={typeof currentPage === "string" ? "shrink-header" : "header"}
      >
        <h1 className={typeof currentPage === "string" ? "shrink-h1" : ""}>
          Robert Rousset
        </h1>

        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    </div>
  );
}

export default Header;
