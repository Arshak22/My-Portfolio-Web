import React from "react";
import Introduction from "./Components/Introduction";
import BIO from "./Components/BIO";
import AdditionalInformation from "./Components/AdditionalInformation";

function App() {
  return (
    <div className="PortfolioWeb">
      <Introduction/>
      <BIO/>
      <AdditionalInformation/>
    </div>
  );
}

export default App;