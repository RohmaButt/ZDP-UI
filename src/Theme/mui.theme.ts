import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import * as React from "react";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    HomeBold: true;
    SubTitle: true;
    DialogText: true;
    DialogSubTitle: true;
    XSmallHeading: true;
    SmallHeading: true;
    CTA_Button_L: true;
    CTA_Button_M: true;
    CTA_Button_S: true;
    Body_Content_M: true;
    Body_Content_BM: true;
    Body_Content_S: true;
    Body_Labels_M: true;
    Body_Labels_M1: true;
    RadioText: true;
    HelperText: true;
    LabelOSI: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  HomeBold: React.CSSProperties;
  SubTitle: React.CSSProperties;
  DialogText: React.CSSProperties;
  DialogSubTitle: React.CSSProperties;
  XSmallHeading: React.CSSProperties;
  SmallHeading: React.CSSProperties;
  CTA_Button_L: React.CSSProperties;
  CTA_Button_M: React.CSSProperties;
  CTA_Button_S: React.CSSProperties;
  Body_Content_M: React.CSSProperties;
  Body_Content_BM: React.CSSProperties;
  Body_Content_S: React.CSSProperties;
  Body_Labels_M: React.CSSProperties;
  Body_Labels_M1: React.CSSProperties;
  RadioText: React.CSSProperties;
  HelperText: React.CSSProperties;
  LabelOSI: React.CSSProperties;
}

// variant = 'HomeBold' || 'XSmallHeading' || 'SmallHeading' || 'CTA_Button_L' || 'CTA_Button_M'
// || 'CTA_Button_S' ||  'SubTitle' || 'Body_Content_S' || 'Body_Content_M' || 'Body_Content_BM'
// || 'Body_Labels_M' || 'Body_Labels_M1' || 'SubHeading' || 'SubHeadingText' || 'DialogText'
// || 'DialogSubTitle' || 'RadioText' || 'HelperText' || 'LabelOSI'

const typographyOptions: ExtendedTypographyOptions = {
  fontSize: 13,
  fontFamily: '"Montserrat", sans-serif;',
  HomeBold: {
    //styleName: Heading/Heading - l;
    fontSize: "32px",
    fontWeight: "500",
    lineHeight: 1.25,
    letterSpacing: "0em",
    textAlign: "left",
  },
  XSmallHeading: {
    //styleName: Heading/Heading - xs;
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left",
  },
  SmallHeading: {
    //styleName: Heading/Heading - s;
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0em",
    textAlign: "left",
  },
  CTA_Button_L: {
    //styleName: Buttons/CTA_Button - l;
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left",
  },
  CTA_Button_M: {
    //styleName: Buttons/CTA_Button - m;
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: "0em",
    textAlign: "left",
  },
  CTA_Button_S: {
    //styleName: Buttons/CTA_Button - s;
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left",
  },
  SubTitle: {
    //styleName: Sub Titles/Subtitle - s;
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left",
  },
  Body_Content_S: {
    //styleName: Body/Content/Body - s;
    fontFamily: "Open Sans",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: 1.38,
    letterSpacing: "0em",
    textAlign: "left",
  },

  Body_Content_M: {
    //styleName: Body/Content/Body - m;
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left",
  },
  Body_Content_BM: {
    //styleName: Body - Content/B-m;
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.57,
    letterSpacing: "0em",
    textAlign: "center",
  },
  Body_Labels_M: {
    //styleName: Body/Labels/Label - M2 (Table);
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: 1.6,
    letterSpacing: "0em",
    textAlign: "left",
  },
  Body_Labels_M1: {
    //styleName: Body/Labels/Label - M1 (Input);
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: 1.16,
    letterSpacing: "0em",
    textAlign: "left",
  },
  SubHeading: {
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left",
  },
  SubHeadingText: {
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: 1.5,
    letterSpacing: "0em",
  },
  DialogText: {
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: 1.333,
    letterSpacing: "0em",
  },
  DialogSubTitle: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0em",
  },
  RadioText: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1.57,
    letterSpacing: "0.03em",
    textAlign: "left",
  },
  HelperText: {
    //styleName: New Styles/Components/Helper text;
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0.4000000059604645px",
    textAlign: "left",
  },
  LabelOSI: {
    //styleName: Body/Labels/Label - OS1 (Captions);
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left",
  },
} as ExtendedTypographyOptions;

let theme = createTheme({
  palette: {
    primary: {
      main: "#005596",
    },
    secondary: {
      main: "#FFFFFF",
    },
    action: {
      disabled: "#aaa",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#edebeb",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#edebeb",
            width: "0.5em",
            height: "0.5em",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#979797",
            minHeight: 1,
            minWidth: 2,
            maxWidth: 1,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#edebeb",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#edebeb",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#979797",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#ffffff",
          },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#132640",
          color: "white",
        },
      },
    },

    MuiTablePagination: {
      styleOverrides: {
        root: {
          p: {
            marginBottom: 0,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          // backgroundColor: "#005596",
          // color: "white",
          // border: "0px",
          // "&.Mui-disabled": {
          //   backgroundColor: "#D1D3D4",
          //   color: "#58595B",
          // },
          // "&:hover": {
          //   backgroundColor: "white",
          //   BorderColor: "#white",
          //   color: "#58595B",
          //   borderColor: "#005596",
          // },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // backgroundColor: "green",
        },
        // rounded: { borderRadius: 90 },
        elevation: {
          top: "0",
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        // root: { backgroundColor: "yellow" },
        paper: {
          // borderRadius: 40,
          overflowY: "hidden",
          top: "0 !important",
          right: "0 !important",
          left: "auto !important",
        },
      },
    },
    //  "MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-8xo4ob-MuiPaper-root-MuiCard-root"
    MuiCard: {
      styleOverrides: {
        // root: { backgroundColor: "orange" },
      },
    },
    MuiPopover: {
      styleOverrides: {
        // paper: { backgroundColor: "red" },
      },
    }, // MuiPaper: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       // Some CSS
    //       backgroundColor: "red",
    //       borderRadius: "100px",
    //       boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    //       top: 0,
    //       right: 0,
    //     },
    //   },
    // },
  },
  typography: typographyOptions,
});

theme = responsiveFontSizes(theme);

export default theme;
