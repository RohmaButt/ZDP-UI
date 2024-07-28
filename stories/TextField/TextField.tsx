import React, { ReactNode } from "react";
import { TextFieldComponent } from "../../src/baseComponents/TextField";

export interface TextFieldProps {
  Label?: string;
  variant?: any;
  value?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  types?: string;
  withChip?: string;
  [key: string]: any; // Allow any other additional props
}

/**
 * Primary UI component for user interaction
 */
export const TextFields = ({
  id,
  Label,
  variant,
  value,
  onChange,
  sx,
  types,
  withChip,
  ...otherProps
}: TextFieldProps) => {
  return (
    <TextFieldComponent
      id={id}
      value={value}
      onChange={onChange}
      label={Label}
      variant={variant ? variant : "outlined"}
      sx={sx}
      types={types}
      withChip={withChip}
      {...otherProps}
    >
      {Label}
    </TextFieldComponent>
  );
};

// Button.defaultProps = {
//   types: "save",
// };
