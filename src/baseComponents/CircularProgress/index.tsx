import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
type IProps = {
  size?: number;
  [key: string]: any; // Allow any other additional props
};

export default function CircularParogress({ size, ...otherProps }: IProps) {
  return <CircularProgress size={size} {...otherProps} />;
}

CircularParogress.defaultProps = {
  size: 24,
};
