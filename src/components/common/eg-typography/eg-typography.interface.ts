export type EgFontFamilty = "DM Sans" | "'DM Sans', sans-serif" | "Work Sans" | "'Work Sans', sans-serif";
export type EgFontSize = "8px" | "10px" | "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "35px" | "45px";
export type EgLineHeight = "12px" | "14px" | "15px" | "16px" | "18px" | "19px" | "20px" | "21px" | "22px" | "28px" | "32px" | "45px" | "54px";
export type EgLetterSpacing = "-0.22px" | "-0.3px" | "0" | "0.1px" | "0.2px" | "0.22px" | "0.3px" | "0.4px" | "0.5px" | "0.6px" | "1px";
export type EgStyleName = "Display 1" | "Display 2" | "Title 2" | "Body 3/Regular" | "Link 3/Regular" | "Caption/Medium" | "Body 3/Medium" | "Link 1/Medium" | "Button/S";

export interface EgTypographyMapping {
  name?: EgStyleName;
  fontFamily: EgFontFamilty;
  fontSize: EgFontSize;
  lineHeight: EgLineHeight;
  letterSpacing: EgLetterSpacing;
  fontWeight: 400 | 500 | 600 | 700;
}

export interface EgTypographyMap {
  [name: string]: EgTypographyMapping;
}

export type TextAlign = "left" | "center" | "end";
export interface EgTypographyPropsInterface {
  name: EgStyleName;
  children: React.ReactNode;
  color?: string;
  as?: string;
  ellipsis?: boolean;
  tooltip?: string | undefined | null;
  align?: TextAlign;
  onClick?: React.MouseEventHandler<Element> | undefined;
  style?: React.CSSProperties;
  lineClamp?: boolean;
  lines?: number;
  maxWidth?: number;
  cursor?: string;
}
