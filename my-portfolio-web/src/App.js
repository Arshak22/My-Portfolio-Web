import React from "react";
import Introduction from "./Components/Introduction";
import BIO from "./Components/BIO";
import AdditionalInformation from "./Components/AdditionalInformation";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="PortfolioWeb">
      <Introduction/>
      <BIO/>
      <AdditionalInformation/>
      <Portfolio/>
    </div>
  );
}

export default App;