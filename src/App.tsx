import React, { FC } from "react";
import "antd/dist/reset.css";
import { AuthContextProvider } from "./contexts/auth-context/AuthContextProvider";
import Navigation from "./navigation";
import ConfigProvider from "antd/es/config-provider";

const App: FC = () => {
  return (
    <ConfigProvider>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </ConfigProvider>
  );
};

export default App;
