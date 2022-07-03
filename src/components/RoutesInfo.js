import React, { lazy, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../util/GlobalContext";
import ShareData from "../util/ShareData";
import Info from "./Info";

export default function RoutesInfo() {
  //const elements = state.map((things) => <li key={uuidv4()}>{things}</li>);

  const [state, setState] = useState({ arrUsers: [] });

  const LoginLazy = lazy(() => import("./Login"));

  const RegisterLazy = lazy(() => import("./Register"));

  //const InfoLazy = lazy(() => import("./Info"));

  const InfoLazy = Info;

  //const shareData = new ShareData();

  const Loading = () => {
    return <div>Loading Module...</div>;
  };

  return (
    <GlobalContext.Provider value={state}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LoginLazy />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <RegisterLazy />
            </Suspense>
          }
        />
        <Route
          path="/info"
          element={
            <Suspense fallback={<Loading />}>
              <InfoLazy />
            </Suspense>
          }
        />
      </Routes>
    </GlobalContext.Provider>
  );
}
