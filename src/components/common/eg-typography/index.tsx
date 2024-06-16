import React, { FC, memo } from "react";
import useThemeToken from "../hooks/useThemeToken";
import useTypographyMappingHook from "../hooks/useTypographyMappingHook";
import { EgTypographyPropsInterface } from "./eg-typography.interface";
import { DynamicDiv } from "./styled-components";

const EgTypography: FC<EgTypographyPropsInterface> = ({ name, tooltip, children, color, as, ellipsis = false, align = "left", style, onClick, lineClamp, lines, maxWidth = 200, cursor }) => {
  const [token] = useThemeToken();
  const { typographyMap } = useTypographyMappingHook(name);
  let DynamicTag = `${as ?? "span"}` as keyof JSX.IntrinsicElements;
  if (name === "Display 1" || name === "Display 2" || name.toLowerCase().includes("title")) {
    DynamicTag = `${as ?? "div"}` as keyof JSX.IntrinsicElements;
  }
  return (
    <DynamicDiv
      cursor={cursor ?? "default"}
      maxWidth={maxWidth}
      lineClamp={lineClamp}
      lines={lines}
      style={style}
      onClick={onClick}
      ellipsis={ellipsis}
      align={align}
      styles={typographyMap[name]}
      color={color ?? token.colorText}
      as={DynamicTag}
    >
      {children}
    </DynamicDiv>
  );
};

export default memo(EgTypography, (p, n) => p.children === n.children && p.color === n.color);
