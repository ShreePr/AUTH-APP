import styled from "@emotion/styled";
import { Button } from "../antd/Button";

export const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  box-shadow: none;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.6px;
  cursor: pointer;
  &.ant-btn-default:disabled {
    border-color: rgba(0, 0, 0, 0.04);
  }
`;
