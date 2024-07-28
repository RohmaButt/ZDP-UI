import React, { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { BoxComponent } from "../Box";
import { TypographyComponent } from "../Typography";
import DividerComponent from "../Divider";
// import crossicon from "../../../public/assets/icon/cross_icon.png";
import { ButtonComponent } from "../Button";
import { styles } from "./style";

type IProps = {
  open: boolean;
  handleClose?: any;
  title?: String;
  subTitle?: String;
  handleSave?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
  dialogChildrenStyle?: object;
  firstDivider?: boolean;
  duplicate?: () => void;
  handleNext?: () => void;
  showNext?: boolean;
  maxHeight?: string;
  [key: string]: any; // Allow any other additional props
};

export function DialogComponent({
  open,
  handleClose,
  title,
  subTitle,
  children,
  handleSave,
  dialogChildrenStyle,
  firstDivider,
  duplicate,
  handleNext,
  showNext,
  maxHeight,
  ...otherProps
}: IProps) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      <BoxComponent sx={styles.mainDiv}>
        <BoxComponent sx={styles.dialogHeader}>
          <BoxComponent sx={styles.headerDiv}>
            <TypographyComponent
              sx={styles.dialogText}
              variant="DialogText"
              component="p"
            >
              {title}
            </TypographyComponent>
            <img
              width={"15.38px"}
              height={"15.38px"}
              src={"crossicon"}
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            />
          </BoxComponent>
          {subTitle && (
            <TypographyComponent
              sx={styles.dialogSubtitle}
              variant="DialogSubTitle"
              component="p"
            >
              {subTitle}
            </TypographyComponent>
          )}
        </BoxComponent>
        {firstDivider && <DividerComponent sx={{ width: "100%" }} />}
        <DialogContent
          sx={{
            ...dialogChildrenStyle,
            p: "10px 24px",
            maxHeight: maxHeight ? maxHeight : "450px",
          }}
        >
          {children}
        </DialogContent>
        <DividerComponent sx={{ width: "100%" }} />
        <DialogActions sx={styles.dialogAction}>
          <BoxComponent sx={styles.buttonBox}>
            <ButtonComponent sx={styles.cancelButton} onClick={handleClose}>
              Cancel
            </ButtonComponent>
            {duplicate && (
              <ButtonComponent sx={styles.duplicateButton} onClick={duplicate}>
                Duplicate
              </ButtonComponent>
            )}
            {!showNext && (
              <ButtonComponent sx={styles.saveButton} onClick={handleSave}>
                Save
              </ButtonComponent>
            )}
            {showNext && (
              <ButtonComponent sx={styles.saveButton} onClick={handleNext}>
                Next
              </ButtonComponent>
            )}
          </BoxComponent>
        </DialogActions>
      </BoxComponent>
    </Dialog>
  );
}

DialogComponent.defaultProps = {
  open: false,
  children: <></>,
  handleClose: () => {},
  title: "I am title",
  handleSave: () => {},
  firstDivider: true,
  maxHeight: "450px",
};
