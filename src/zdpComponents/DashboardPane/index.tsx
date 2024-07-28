import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import AppMenuItem from "../AppMenuItem";
import { ProfileBarProps } from "../ProfileBar/types";
import * as React from "react";

const DashboardPaneComponent = (props: ProfileBarProps) => {
  const { appsMainURL } = props;

  // console.log("appsMainURL", appsMainURL);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid width={"250px"} container spacing={0}>
        <Grid xs={6}>
          <AppMenuItem
            title={"Ecommerce"}
            image={require("/public/app-icon.png")}
            href={`${appsMainURL}/merch`}
          />
        </Grid>
        <Grid xs={6}>
          <AppMenuItem
            title={"Settings"}
            image={require("/public/setting.svg")}
            href={`${appsMainURL}/admin`}
          />
        </Grid>
        <Grid xs={6}>
          <AppMenuItem
            title={"Data Flow"}
            image={require("/public/notify-icon.png")}
            href={`${appsMainURL}/dataflow`}
          />
        </Grid>
        <Grid xs={6}>
          <AppMenuItem
            title={"ZDP-PIM"}
            image={require("/public/pim-icon.png")}
            href={`${appsMainURL}/pim`}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPaneComponent;
