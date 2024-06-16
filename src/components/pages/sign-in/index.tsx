import Form from "antd/es/form";
import useThemeToken from "components/common/hooks/useThemeToken";
import EgButton from "components/common/eg-button";
import EgInput from "components/common/eg-input";
import EgInputPassword from "components/common/eg-input/EgInputPassword";
import EgTypography from "components/common/eg-typography";
import { SignInInterface } from "components/layouts/auth-layout/auth.interface";
import { DivWrapper } from "components/layouts/auth-layout/styled-components";
import { useAuth } from "contexts/auth-context/AuthContextProvider";
import { ROUTES } from "navigation/CONSTANTS";
import { FC, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "utils/validation";

const Login: FC = () => {
  const [form] = Form.useForm();
  const { signIn, isAuthenticated, loading } = useAuth();
  const [showError, setShowError] = useState<string>("");
  const [token] = useThemeToken();
  const navigate = useNavigate();

  const onSubmit = async (values: SignInInterface) => {
    const { email, password } = values;
    if (!validateEmail(email)) {
      form.setFields([{ name: "email", errors: ["Invalid email address."] }]);
      return;
    }

    if (!validatePassword(password)) {
      form.setFields([{ name: "password", errors: ["Password must be at least 8 characters long and contain at least 1 letter, 1 number, and 1 special character."] }]);
      return;
    }
    const data = await signIn(email, password);
    if (data && data.response && data.response.status === 401) {
      setShowError("The Username or Password you entered is incorrect.");
      form.setFields([
        { name: "email", errors: [""] },
        { name: "password", errors: [""] }
      ]);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={ROUTES.INDEX} />;
  }

  return (
    <DivWrapper successSuffixIcon={false}>
      <Form requiredMark={false} layout={"vertical"} onFinish={onSubmit} form={form} style={{ width: "400px", paddingRight: "30px" }}>
        <Form.Item>
          <EgTypography name="Title 2">Welcome Back</EgTypography>
          <EgTypography name="Body 3/Regular" color={token?.colorPrimaryText}>
            Please enter your details.
          </EgTypography>
          {showError && (
            <Form.Item>
              <EgTypography color={token?.colorError} name="Caption/Medium">
                {showError}
              </EgTypography>
            </Form.Item>
          )}
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Enter your email."
            }
          ]}
          name="email"
          label={
            <EgTypography name="Body 3/Medium" color={token?.colorPrimaryText}>
              Email
            </EgTypography>
          }
        >
          <EgInput placeholder="janedoe@gmail.com" />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Enter your password."
            }
          ]}
          name="password"
          label={
            <EgTypography name="Body 3/Medium" color={token?.colorPrimaryText}>
              Password
            </EgTypography>
          }
        >
          <EgInputPassword />
        </Form.Item>

        <Form.Item>
          <EgButton loading={loading} type="primary" style={{ width: "100%", justifyContent: "center", height: "24px" }} onClick={form?.submit}>
            <EgTypography name="Button/S" color={token?.colorBgContainer}>
              Sign In
            </EgTypography>
          </EgButton>
        </Form.Item>
      </Form>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "8px" }}>
        <EgTypography
          name="Link 3/Regular"
          color={token?.colorPrimary}
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => navigate(ROUTES.SIGN_UP, { state: { from: ROUTES.SIGN_UP } })}
        >
          Sign Up
        </EgTypography>
      </div>
    </DivWrapper>
  );
};

export default Login;
