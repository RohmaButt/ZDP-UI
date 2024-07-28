import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

export type SettingsCardProps = {
  data: any;
  title: any;
  notificationSettings: {
    itemEdited: {
      isEmailNotification: boolean;
      isInAppNotification: boolean;
    };
    itemShared: {
      isEmailNotification: boolean;
      isInAppNotification: boolean;
    };
    approvalRequest: {
      isEmailNotification: boolean;
      isInAppNotification: boolean;
    };
  };
  handleToggle: (field: string, value: any) => void;
};

export const SettingsCardComponent = (props: SettingsCardProps) => {
  const { title, data, notificationSettings, handleToggle } = props;

  const CustomSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 34,
    height: 18,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "#FFFFF" : "#FFFFF",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 14,
      height: 14,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#B8BAC7" : "#B8BAC7",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <Box
      component="span"
      sx={{
        width: "100%",
        marginTop: 3,
        paddingLeft: 2,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 2,
        border: "0.50px #ECEEF0 solid",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "inline-flex",
      }}
    >
      <Typography
        sx={{
          color: "#121C2B",
          fontSize: 14,
          fontFamily: "Open Sans",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
      {title == "Notify For Approval" ? (
        <FormGroup sx={{ ml: 2, mt: 1 }}>
          <FormControlLabel
            control={
              <CustomSwitch
                sx={{ m: 1 }}
                checked={
                  notificationSettings?.approvalRequest?.isEmailNotification
                }
                onChange={(e) =>
                  handleToggle("approvalRequest", {
                    ...notificationSettings.approvalRequest,
                    isEmailNotification: e.target.checked,
                  })
                }
              />
            }
            label="Email Notifications"
          />
          <FormControlLabel
            sx={{ mt: 1 }}
            control={
              <CustomSwitch
                sx={{ m: 1 }}
                checked={
                  notificationSettings?.approvalRequest?.isInAppNotification
                }
                onChange={(e) =>
                  handleToggle("approvalRequest", {
                    ...notificationSettings.approvalRequest,
                    isInAppNotification: e.target.checked,
                  })
                }
              />
            }
            label="In-App Notifications"
          />
        </FormGroup>
      ) : title == "Notify When A User Shares" ? (
        <FormGroup sx={{ ml: 2, mt: 1 }}>
          <FormControlLabel
            control={
              <CustomSwitch
                sx={{ m: 1 }}
                checked={notificationSettings?.itemShared?.isEmailNotification}
                onChange={(e) =>
                  handleToggle("itemShared", {
                    ...notificationSettings.itemShared,
                    isEmailNotification: e.target.checked,
                  })
                }
              />
            }
            label="Email Notifications"
          />
          <FormControlLabel
            sx={{ mt: 1 }}
            control={
              <CustomSwitch
                sx={{ m: 1 }}
                checked={notificationSettings?.itemShared?.isInAppNotification}
                onChange={(e) =>
                  handleToggle("itemShared", {
                    ...notificationSettings.itemShared,
                    isInAppNotification: e.target.checked,
                  })
                }
              />
            }
            label="In-App Notifications"
          />
        </FormGroup>
      ) : (
        <FormGroup sx={{ ml: 2, mt: 1 }}>
          <FormControlLabel
            control={
              <CustomSwitch
                sx={{ m: 1 }}
                checked={notificationSettings?.itemEdited?.isEmailNotification}
                onChange={(e) =>
                  handleToggle("itemEdited", {
                    ...notificationSettings.itemEdited,
                    isEmailNotification: e.target.checked,
                  })
                }
              />
            }
            label="Email Notifications"
          />
          <FormControlLabel
            sx={{ mt: 1 }}
            control={
              <CustomSwitch
                sx={{ m: 1 }}
                checked={notificationSettings?.itemEdited?.isInAppNotification}
                onChange={(e) =>
                  handleToggle("itemEdited", {
                    ...notificationSettings.itemEdited,
                    isInAppNotification: e.target.checked,
                  })
                }
              />
            }
            label="In-App Notifications"
          />
        </FormGroup>
      )}
    </Box>
  );
};
