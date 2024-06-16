import styled from "@emotion/styled";
import { EgTypographyMapping, TextAlign } from "./eg-typography.interface";

export const DynamicDiv = styled.div<{ styles: EgTypographyMapping; color?: string; ellipsis?: boolean; align?: TextAlign; lineClamp?: boolean; lines?: number; maxWidth?: number; cursor?: string }>`
  font-family: ${(props) => `${props.styles.fontFamily}`};
  font-size: ${(props) => `${props.styles.fontSize}`};
  line-height: ${(props) => `${props.styles.lineHeight}`};
  letter-spacing: ${(props) => `${props.styles.letterSpacing}`};
  font-weight: ${(props) => `${props.styles.fontWeight}`};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  text-align: ${(props) => props.align};
  ${(props) =>
    props.ellipsis &&
    `
      ${
        props.lineClamp
          ? ` display: -webkit-box;
      -webkit-line-clamp: ${props.lines};
      -webkit-box-orient: vertical;  `
          : ` white-space: nowrap;`
      }
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: ${props.maxWidth}px;
  `}
`;
