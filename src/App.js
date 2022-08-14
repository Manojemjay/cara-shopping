import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Shop from "./Shop";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";

function App() {
return (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element = {<><Header/> <Home/><Footer/><Shop/></>} />
        <Route path="/Blog" element = {<><Blog/><About/><Contact/></>} />
      </Routes>
    </Router>
  </div>
);
}
export default App;