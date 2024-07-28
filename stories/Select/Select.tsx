import React, { ReactNode } from "react";
import { SelectComponent } from "../../src/baseComponents/Select";

type Option = {
  val: string;
  label: string;
};

export interface SelectProps {
  value: string;
  handleValueChange: (value: string) => void;
  label: string;
  options: Option[];
  labelVariant?: any;
  [key: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  value,
  handleValueChange,
  options,
  label,
  labelVariant,
  ...props
}: SelectProps) => {
  return (
    <SelectComponent
      label={label}
      handleValueChange={handleValueChange}
      options={options}
      labelVariant={labelVariant}
      value={value}
      {...props}
    />
  );
};

// Button.defaultProps = {
//   types: "save",
// };
