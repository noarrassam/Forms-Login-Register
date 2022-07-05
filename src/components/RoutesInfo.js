import React, { lazy, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalContext from "../util/GlobalContext";
import Info from "./Info";

export default function RoutesInfo() {
  const [state, setState] = useState({ arrUsers: [], arrLoginUsers: [] });
  // const [loginUsers, setLoginUsers] = useState({ arrLoginUsers: [] });

  const LoginLazy = lazy(() => import("./Login"));

  const RegisterLazy = lazy(() => import("./Register"));

  const ProfileLazy = lazy(() => import("./Profile"));

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
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              <ProfileLazy />
            </Suspense>
          }
        />
      </Routes>
    </GlobalContext.Provider>
  );
}
