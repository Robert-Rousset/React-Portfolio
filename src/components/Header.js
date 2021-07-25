import Navbar from "./Navbar";

function Header({ handlePageChange }) {
  return (
    <div>
      <header>
        <h1>Robert Rousset</h1>

        <Navbar handlePageChange={handlePageChange} />
      </header>
    </div>
  );
}

export default Header;
