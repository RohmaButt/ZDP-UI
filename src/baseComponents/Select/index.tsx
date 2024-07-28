import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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
export function SelectComponent({
  value,
  handleValueChange,
  label,
  options,
  labelVariant,
  ...otherProps
}: SelectProps) {
  const [selectVal, setSelectVal] = React.useState(value);

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    setSelectVal(newValue);
    handleValueChange(newValue);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={selectVal}
          label={label}
          onChange={handleChange}
          fullWidth
          {...otherProps}
        >
          {options.map((data, index) => (
            <MenuItem value={data.val} key={index}>
              {data.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

SelectComponent.defaultProps = {
  labelVariant: "Body_Labels_M1",
};
