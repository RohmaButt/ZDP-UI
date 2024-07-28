import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
export interface BoxComponentProps {
  children: ReactNode;
  [key: string]: any; // Allow any other additional props
}
export function BoxComponent({ children, ...otherProps }: BoxComponentProps) {
  return <Box {...otherProps}>{children}</Box>;
}

BoxComponent.defaultProps = {
  children: <></>,
};
