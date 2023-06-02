import React, { useRef, useState, useEffect } from "react";
import LoadingPage from "./Components/LoadingPage";
import Introduction from "./Components/Introduction";
import BIO from "./Components/BIO";
import AdditionalInformation from "./Components/AdditionalInformation";
import Portfolio from "./Components/Portfolio";
import WhyChoseMe from "./Components/WhyChoseMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const contactRef = useRef(null);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Introduction scrollToContact={scrollToContact} />
          <BIO />
          <AdditionalInformation />
          <Portfolio />
          <WhyChoseMe />
          <div ref={contactRef}>
            <ContactMe />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;