import React, { FC } from "react";
import I, { InputProps } from "antd/es/input/Input";
import Ip, { PasswordProps } from "antd/es/input/Password";

export type { InputProps, PasswordProps };
export const Input: FC<InputProps> = (props) => <I {...props} />;
export const InputNumberPassword: FC<PasswordProps> = (props) => <Ip {...props} />;
