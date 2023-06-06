import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";

import LoadingPage from "./Components/LoadingPage";
import Introduction from "./Components/Introduction";
import BIO from "./Components/BIO";
import AdditionalInformation from "./Components/AdditionalInformation";
import Portfolio from "./Components/Portfolio";
import WhyChoseMe from "./Components/WhyChoseMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

function App() {
  const wrapperRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const contactRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if(ScrollTrigger.isTouch !== 1) {
      let smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true
      });
      return () => {
        smoother.kill();
      };
    }
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
    <div ref={wrapperRef} id="smooth-wrapper" className="PortfolioWeb">
      <div id="smooth-content">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <div>
              <div>
                <Introduction scrollToContact={scrollToContact} />
                <BIO />
                <AdditionalInformation />
                <Portfolio />
                <WhyChoseMe />
                <div ref={contactRef}>
                  <ContactMe />
                </div>
                <Footer />
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;