import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { TypographyComponent } from "../Typography";
import { btnStyles } from "./style";
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: ReactNode;
  variant?: any;
  types?: "save" | "cancel" | undefined;
  [key: string]: any; // Allow any other additional props
}

export const ButtonComponent = ({
  children,
  onClick,
  variant,
  types,
  backgroundColor,
  size,
  sx,
  ...otherProps
}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={
        types && types === "save"
          ? { ...btnStyles.saveButton, backgroundColor: backgroundColor }
          : types === "cancel"
          ? { ...btnStyles.cancelButton, backgroundColor: backgroundColor }
          : sx
      }
      {...otherProps}
      size={size}
    >
      {variant ? (
        <TypographyComponent variant={variant} component="p">
          {children}
        </TypographyComponent>
      ) : (
        children
      )}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  children: <></>,
};
