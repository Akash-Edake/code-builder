import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ReactComp from "../components/pages/React/React";
const Html = React.lazy(() => import("../components/pages/Html/Html"));
const JavaScript = React.lazy(() =>
  import("../components/pages/JavaScript/JavaScript")
);
const Css = React.lazy(() => import("../components/pages/Css/Css"));
const Angular = React.lazy(() => import("../components/pages/Angular/Angular"));

function Routing() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ReactComp />} />
          <Route path="/react" element={<ReactComp />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/html" element={<Html />} />
          <Route path="/javaScript" element={<JavaScript />} />
          <Route path="/css" element={<Css />} />
        </Routes>
      </Suspense>
      <Analytics debug={false} />
    </>
  );
}

export default Routing;
