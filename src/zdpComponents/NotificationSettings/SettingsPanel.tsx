import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SettingsCardComponent } from "./SettingsCard";
import React from "react";

export type SettingsPanelProps = {
  data: any;
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

export const SettingsPanelComponent = (props: SettingsPanelProps) => {
  const { data, notificationSettings, handleToggle } = props;

  return (
    <Box
      component="span"
      sx={{
        width: "100%",
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
          fontSize: 18,
          fontWeight: "500",
        }}
      >
        Customize Your Notifications
      </Typography>
      <Typography
        sx={{
          color: "#7A7E8B",
          fontSize: 13,
          fontFamily: "Open Sans",
          fontWeight: "400",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <SettingsCardComponent
        title="Notify For Approval"
        data={data}
        notificationSettings={notificationSettings}
        handleToggle={handleToggle}
      />
      <SettingsCardComponent
        title="Notify When An Owned Item Gets Edited"
        data={data}
        notificationSettings={notificationSettings}
        handleToggle={handleToggle}
      />
      <SettingsCardComponent
        title="Notify When A User Shares"
        data={data}
        notificationSettings={notificationSettings}
        handleToggle={handleToggle}
      />
    </Box>
  );
};
