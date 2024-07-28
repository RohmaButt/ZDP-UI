import { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/mui.theme";
import * as React from "react";

export interface TypographyProps {
  children: ReactNode;
  variant?: any;
  [key: string]: any; // Allow any other additional props
}
export function TypographyComponent({
  children,
  variant,
  ...otherProps
}: TypographyProps) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} {...otherProps}>
        {children}
      </Typography>
    </ThemeProvider>
  );
}
