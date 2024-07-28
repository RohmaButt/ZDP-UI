import React from "react";
import Autocomplete, { OptionType } from "./AutoComplete";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";

type IProps = {
  values: OptionType[];
  onSetValue: (val: OptionType[]) => void; // Change the type to accept an array
  title?: string;
  userType?: string;
  optionsVal: OptionType[];
  textVal: string;
  setTextValue: (value: string) => void;
};

export default function ShareDialog({
  values,
  title,
  userType,
  onSetValue,
  optionsVal,
  setTextValue,
  textVal,
}: IProps) {
  return (
    <BoxComponent
      sx={{ display: "flex", gap: "16px", flexDirection: "column", pb: "24px" }}
    >
      <TypographyComponent
        variant="XSmallHeading"
        component="h1"
        sx={{ color: "#323E4D" }}
      >
        {title}
      </TypographyComponent>
      <Autocomplete
        options={optionsVal}
        value={values}
        setValue={onSetValue}
        textVal={textVal}
        setTextValue={setTextValue}
      />
    </BoxComponent>
  );
}

ShareDialog.defaultProps = {
  title: "Share via Email",
  userType: "AD",
};
