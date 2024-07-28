import { ReactNode } from "react";
import { TypographyComponent } from "../../src/baseComponents/Typography";
import * as React from "react";

export interface TypographyProps {
  children: ReactNode;
  variant?: any;
  [key: string]: any; // Allow any other additional props
}

/**
 * Primary UI component for user interaction
 */
export const Typograhys = ({
  children,
  variant = "HomeBold" ||
    "XSmallHeading" ||
    "SmallHeading" ||
    "CTA_Button_L" ||
    "CTA_Button_M" ||
    "CTA_Button_S" ||
    "SubTitle" ||
    "Body_Content_S" ||
    "Body_Content_M" ||
    "Body_Content_BM" ||
    "Body_Labels_M" ||
    "Body_Labels_M1" ||
    "SubHeading" ||
    "SubHeadingText" ||
    "DialogText" ||
    "DialogSubTitle" ||
    "RadioText" ||
    "HelperText" ||
    "LabelOSI",
  ...props
}: TypographyProps) => {
  return (
    <TypographyComponent variant={variant} {...props}>
      {children}
    </TypographyComponent>
  );
};

// Button.defaultProps = {
//   types: "save",
// };
