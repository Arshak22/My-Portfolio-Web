import React, { useRef } from "react";
import Introduction from "./Components/Introduction";
import BIO from "./Components/BIO";
import AdditionalInformation from "./Components/AdditionalInformation";
import Portfolio from "./Components/Portfolio";
import WhyChoseMe from "./Components/WhyChoseMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      duration: 1000,
      startOffset: 0,
    });
  };

  return (
    <div className="PortfolioWeb">
      <Introduction scrollToContact={scrollToContact}/>
      <BIO/>
      <AdditionalInformation/>
      <Portfolio/>
      <WhyChoseMe/>
      <div ref={contactRef}>
        <ContactMe />
      </div>
      <Footer/>
    </div>
  );
};

export default App;