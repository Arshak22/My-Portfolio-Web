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
  const wrapperRef = useRef();
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={wrapperRef} id="smooth-wrapper" className="PortfolioWeb">
      <div id="smooth-content">
        <div>
          <Header />
          <Introduction scrollToContact={scrollToContact} />
          <BIO />
          <Experience />
          <Skills />
          <Portfolio />
          <div ref={contactRef}>
            <ContactMe />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
