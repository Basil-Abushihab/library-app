import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomeScreen from "./Pages/homepage";
import Header from "./Components/HeaderComponent/headerComponent";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Signup from "./Pages/signupForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Components/contextComponent/context";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
