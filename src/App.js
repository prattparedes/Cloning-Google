import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/search" element={'This is the Search Page'} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
