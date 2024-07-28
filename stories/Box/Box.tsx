import React, { ReactNode } from "react";
import { BoxComponent } from "../../src/baseComponents/Box";

export interface BoxComponentProps {
  children: ReactNode;
  [key: string]: any; // Allow any other additional props
}

/**
 * Primary UI component for user interaction
 */
export const Box = ({ children, ...props }: BoxComponentProps) => {
  return <BoxComponent {...props}>{children}</BoxComponent>;
};

// Button.defaultProps = {
//   types: "save",
// };
