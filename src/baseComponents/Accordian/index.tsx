import { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TypographyComponent } from "../Typography";
import CheckboxLabels from "../Checkbox";
// import CheckboxImage from "./../../../assets/icon/Checkbox.png";
import * as React from "react";

type IProps = {
  title?: string;
  children: ReactNode;
  titleVariant?: string;
  isborder?: boolean;
  isCheckbox?: boolean;
  checked?: boolean;
  onChangeRows?: (val: boolean) => void;
  [key: string]: any; // Allow any other additional props
};

export default function AccordionComponent({
  title,
  children,
  titleVariant,
  isborder,
  isCheckbox,
  checked,
  onChangeRows,
  ...otherProps
}: IProps) {
  return (
    <Accordion
      sx={{
        border: isborder ? "1px solid #E2E5E9" : "none",
        boxShadow: "none",
        borderRadius: isborder ? "8px" : "14px",
        padding: "0px 16px",
        paddingBottom: "15px",
      }}
      expanded={checked}
      TransitionProps={{ unmountOnExit: true }}
      {...otherProps}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          padding: 0,
          borderBottom: isborder ? "initial" : "1px solid #E2E5E9",
        }}
      >
        {isCheckbox ? (
          <CheckboxLabels
            checked={checked}
            checkedIcon={<img alt={"Selected"} />}
            onChange={(val) => {
              if (onChangeRows) onChangeRows(val);
            }}
            label={
              <TypographyComponent
                variant={titleVariant}
                component="h2"
                sx={{ color: "#132640" }}
              >
                {title}
              </TypographyComponent>
            }
          />
        ) : (
          <TypographyComponent
            variant={titleVariant}
            component="h2"
            sx={{ color: "#132640" }}
          >
            {title}
          </TypographyComponent>
        )}
      </AccordionSummary>
      <AccordionDetails sx={{ paddingX: "0px" }}>{children}</AccordionDetails>
    </Accordion>
  );
}
AccordionComponent.defaultProps = {
  titleVariant: "SmallHeading",
  isborder: false,
  isCheckbox: false,
};
