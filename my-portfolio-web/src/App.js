import React from "react";
import Introduction from "./Components/Introduction";
import BIO from "./Components/BIO";
import AdditionalInformation from "./Components/AdditionalInformation";
import Portfolio from "./Components/Portfolio";
import WhyChoseMe from "./Components/WhyChoseMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="PortfolioWeb">
      <Introduction/>
      <BIO/>
      <AdditionalInformation/>
      <Portfolio/>
      <WhyChoseMe/>
      <Footer/>
    </div>
  );
}

export default App;