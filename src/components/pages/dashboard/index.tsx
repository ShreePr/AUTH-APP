import Button from "antd/es/button";
import EgTypography from "components/common/eg-typography";
import { DivWrapper } from "components/layouts/auth-layout/styled-components";
import { useAuth } from "contexts/auth-context/AuthContextProvider";
import React from "react";

const Application: React.FC = () => {
  const { logout } = useAuth();
  return (
    <DivWrapper successSuffixIcon={false}>
      <EgTypography name="Title 2">Welcome to the application</EgTypography>
      <Button style={{ margin: "40px 0" }} onClick={logout}>
        Logout
      </Button>
    </DivWrapper>
  );
};

export default Application;
