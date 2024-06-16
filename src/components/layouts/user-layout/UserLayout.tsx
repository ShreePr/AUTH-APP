import Layout from "antd/es/layout";
import { Content } from "antd/es/layout/layout";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { LayoutStyled } from "./styled-components";
import { UserLayoutPropsInterface } from "./user-layout.interface";

const UserLayout: FC<UserLayoutPropsInterface> = ({ skipMarginLayout = false }) => {
  return (
    <LayoutStyled>
      <Layout>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            padding: "0 20px"
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </LayoutStyled>
  );
};

export default UserLayout;
