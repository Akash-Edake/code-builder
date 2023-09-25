import { Route, Routes } from "react-router-dom";
import React from "../components/pages/React/React";
import Html from "../components/pages/Html/Html";
import JavaScript from "../components/pages/JavaScript/JavaScript";
import Css from "../components/pages/Css/Css";
import Angular from "../components/pages/Angular/Angular";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<React />} />
        <Route path="/react" element={<React />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/html" element={<Html />} />
        <Route path="/javaScript" element={<JavaScript />} />
        <Route path="/css" element={<Css />} />
      </Routes>
    </>
  );
}

export default Routing;
