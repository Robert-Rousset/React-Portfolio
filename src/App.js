import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  const [currentPage, setCurrentPage] = useState();

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return (
        <div>
          <AboutMe />
          <Footer />
        </div>
      );
    }
    if (currentPage === "Projects") {
      return (
        <div>
          <Projects />
          <Footer />
        </div>
      );
    }
    if (currentPage === "Contact") {
      return (
        <div>
          <Contact />
          <Footer />
        </div>
      );
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
