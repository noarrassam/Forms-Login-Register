import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import RoutesInfo from "./components/RoutesInfo";
import "./App.css";
import ShareData from "./util/ShareData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <RoutesInfo />
      </BrowserRouter>
    </div>
  );
}

export default App;
