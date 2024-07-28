import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { textStyle } from "./style";
// import { StyledTextField } from "./styledTextField";
import * as React from "react";

interface TextFieldProps {
  Label?: string;
  variant?: any;
  value?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  types?: string;
  withChip?: string;
  [key: string]: any; // Allow any other additional props
}
export function TextFieldComponent({
  Label,
  variant,
  value,
  onChange,
  sx,
  types,
  withChip,
  ...otherProps
}: TextFieldProps) {
  return (
    // <>
    //   {withChip || withChip === "" ? (
    //     <StyledTextField
    //       id="outlined-basic"
    //       value={value}
    //       onChange={onChange}
    //       label={Label}
    //       variant={variant ? variant : "outlined"}
    //       sx={{ ...sx, ...textStyle.chipTextStyle }}
    //       alias={withChip}
    //       {...otherProps}
    //     />
    //   ) : (
    <TextField
      id="outlined-basic"
      value={value}
      onChange={onChange}
      label={Label}
      variant={variant ? variant : "outlined"}
      sx={types && types === "disabled" ? textStyle.DisabledText : sx}
      {...otherProps}
    />
    //   )}
    // </>
  );
}
