import Divider from "@mui/material/Divider";
import * as React from "react";

type IProps = {
  [key: string]: any; // Allow any other additional props
};

export default function DividerComponent({ ...otherProps }: IProps) {
  return <Divider {...otherProps} />;
}
