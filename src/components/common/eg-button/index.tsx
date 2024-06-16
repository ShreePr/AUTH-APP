import React, { FC, forwardRef } from "react";
import { ButtonProps } from "../antd/Button";
import { ButtonStyled } from "./styled-components";

const EgButton: FC<ButtonProps> = forwardRef((props, ref) => {
  return <ButtonStyled {...props} />;
});

export default EgButton;
