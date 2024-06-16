import { EgStyleName, EgTypographyMap } from "../eg-typography/eg-typography.interface";

type UseTypographyMappingHook = {
  (name: EgStyleName): { typographyMap: EgTypographyMap };
};
const useTypographyMappingHook: UseTypographyMappingHook = (name) => {
  const typographyMap: EgTypographyMap = {
    "Title 2": {
      name: "Title 2",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "-0.3px",
      fontWeight: 500
    },
    "Caption/Medium": {
      name: "Caption/Medium",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.5px",
      fontWeight: 500
    },

    "Body 3/Regular": {
      name: "Body 3/Regular",
      fontFamily: "'Work Sans', sans-serif",
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "0.2px",
      fontWeight: 400
    },

    "Link 3/Regular": {
      name: "Link 3/Regular",
      fontFamily: "'Work Sans', sans-serif",
      fontSize: "12px",
      lineHeight: "14px",
      letterSpacing: "0.2px",
      fontWeight: 400
    },

    "Body 3/Medium": {
      name: "Body 3/Medium",
      fontFamily: "'Work Sans', sans-serif",
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "0.2px",
      fontWeight: 500
    },
    "Link 1/Medium": {
      name: "Link 1/Medium",
      fontFamily: "'Work Sans', sans-serif",
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0",
      fontWeight: 500
    },
    "Button/S": {
      name: "Button/S",
      fontFamily: "'Work Sans', sans-serif",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.6px",
      fontWeight: 600
    }
  };

  return { typographyMap };
};
export default useTypographyMappingHook;
