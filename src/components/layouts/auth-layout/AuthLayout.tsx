import { Content } from "antd/es/layout/layout";
import { Col, Row } from "components/common/antd/Grid";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: FC = () => {
  return (
    <>
      <Row justify={"center"} style={{ height: "100%" }}>
        <Col span={24}>
          <Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
              padding: "20px 20px"
            }}
          >
            <Outlet />
          </Content>
        </Col>
      </Row>
    </>
  );
};
export default AuthLayout;
