import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StarterPage from "./components/StarterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Card from "./components/Card";
import ForOnForCard from "./components/ForOnForCard";
import SixOnSixCard from "./components/SixOnSixCard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StarterPage} />
        <Route path="/cards" component={Card} />
      </Switch>

      <div>
        {/* <StarterPage></StarterPage> */}
        {/* <Card></Card> */}

        {/* <ForOnForCard /> */}
        {/* <SixOnSixCard /> */}
      </div>
    </Router>
  );
}

export default App;
