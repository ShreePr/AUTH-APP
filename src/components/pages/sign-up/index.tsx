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
import { FC } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { validatePassword, validateEmail } from "utils/validation";

const SignUp: FC = () => {
  const [form] = Form.useForm();
  const { signUp, isAuthenticated, loading } = useAuth();

  const [token] = useThemeToken();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.INDEX} />;
  }

  const onSubmit = async (values: SignInInterface) => {
    const { name, email, password } = values;

    if (!validateEmail(email)) {
      form.setFields([{ name: "email", errors: ["Invalid email address."] }]);
      return;
    }

    if (!validatePassword(password)) {
      form.setFields([{ name: "password", errors: ["Password must be at least 8 characters long and contain at least 1 letter, 1 number, and 1 special character."] }]);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await signUp(name, email, password);
  };

  return (
    <DivWrapper successSuffixIcon={false}>
      <Form requiredMark={false} layout={"vertical"} onFinish={onSubmit} form={form} style={{ width: "400px", paddingRight: "30px" }}>
        <Form.Item>
          <EgTypography name="Title 2">Welcome,</EgTypography>
          <EgTypography name="Body 3/Regular" color={token?.colorPrimaryText}>
            Create your account.
          </EgTypography>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Enter your name."
            }
          ]}
          name="name"
          label={
            <EgTypography name="Body 3/Medium" color={token?.colorPrimaryText}>
              Name
            </EgTypography>
          }
        >
          <EgInput placeholder="janedoe" />
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
              Sign Up
            </EgTypography>
          </EgButton>
        </Form.Item>
      </Form>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "8px" }}>
        <EgTypography
          name="Link 3/Regular"
          color={token?.colorPrimary}
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => navigate(ROUTES.SIGN_IN, { state: { from: ROUTES.SIGN_IN } })}
        >
          Sign In
        </EgTypography>
      </div>
    </DivWrapper>
  );
};

export default SignUp;
