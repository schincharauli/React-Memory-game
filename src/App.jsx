import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StarterPage from "./components/StarterPage";
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Card from "./components/Card";
import ForOnForCard from "./components/ForOnForCard";
import SixOnSixCard from "./components/SixOnSixCard";

function App() {
  return (
    <div>
      {/* <StarterPage></StarterPage> */}
      <Card></Card>

      {/* <ForOnForCard /> */}
      {/* <SixOnSixCard /> */}
    </div>
  );
}

export default App;
