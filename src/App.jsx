import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StarterPage from "./components/StarterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "./components/Card";

function App() {
  const [numberClick, setNumberClick] = useState("");

  const numberHandler = (numbers) => {
    setNumberClick(numbers);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<StarterPage numberHandler={numberHandler} />}
        />
        <Route path="/cards" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
