import React, { useRef } from "react";
import Introduction from "./Components/Introduction";
import BIO from "./Components/BIO";
import ContactMe from "./Components/ContactMe";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

function App() {
  const bioRef = useRef(null);
  const expRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToBIO = () => {
    bioRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToExp = () => {
    expRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div id="smooth-wrapper" className="PortfolioWeb">
      <div id="smooth-content">
        <Header
          scrollToBIO={scrollToBIO}
          scrollToExp={scrollToExp}
          scrollToPortfolio={scrollToPortfolio}
        />
        <Introduction scrollToContact={scrollToContact} />
        <div ref={bioRef}>
          <BIO />
        </div>
        <div ref={expRef}>
          <Experience />
        </div>
        <Skills />
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
