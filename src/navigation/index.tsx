import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { ROUTES } from "./CONSTANTS";
import AuthLayout from "../components/layouts/auth-layout/AuthLayout";
import UserLayout from "../components/layouts/user-layout/UserLayout";
import SIGNIN from "../components/pages/sign-in";
import SIGNUP from "../components/pages/sign-up";

const Navigation: FC = () => {
  //ToDo: routing approach improve and apply token logic
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route key={"signin"} path={ROUTES.SIGN_IN} element={<SIGNIN />} />
        <Route key={"signup"} path={ROUTES.SIGN_UP} element={<SIGNUP />} />
      </Route>
      <Route element={<UserLayout skipMarginLayout={true} />}>
        <Route key="index" index element={<Dashboard />} />
        <Route key={"dashboard"} path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
