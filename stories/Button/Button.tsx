import React, { ReactNode } from "react";
import { ButtonComponent } from "../../src/baseComponents/Button";

export interface ButtonProps {
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

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  types,
  sx,
  ...props
}: ButtonProps) => {
  return (
    <ButtonComponent
      type="button"
      types={types}
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      backgroundColor={backgroundColor}
      size={size}
      sx={sx}
      {...props}
    >
      {label}
    </ButtonComponent>
  );
};

// Button.defaultProps = {
//   types: "save",
// };
