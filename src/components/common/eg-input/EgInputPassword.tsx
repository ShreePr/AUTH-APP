import React, { forwardRef } from "react";
import { PasswordProps } from "../antd/Input";
import { InputPasswordStyled } from "./styled-components";

const EgInputPassword: React.FC<PasswordProps> = forwardRef((props, ref) => {
  return <InputPasswordStyled {...props} />;
});

export default EgInputPassword;
