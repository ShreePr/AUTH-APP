import React, { forwardRef } from "react";
import { InputProps } from "../antd/Input";
import { InputStyled } from "./styled-components";

const EgInput: React.FC<InputProps> = forwardRef((props, ref) => {
  return <InputStyled {...props} />;
});

export default EgInput;
