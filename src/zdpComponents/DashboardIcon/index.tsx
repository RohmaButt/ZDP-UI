import Box from "@mui/material/Box";
import { IconButton, Menu } from "@mui/material";
import { ProfileBarProps } from "../ProfileBar/types";
import DashboardPaneComponent from "../DashboardPane";
import * as React from "react";

const DashboardIconComponent = (props: ProfileBarProps) => {
  const exampleImage = require("/public/app-icon.png");
  const { handleOpenAppMenu, handleCloseAppMenu, anchorElApp, appsMainURL } =
    props;

  return (
    <Box sx={{ flexGrow: 0, marginLeft: "10px" }}>
      <IconButton onClick={handleOpenAppMenu} sx={{ p: 0 }}>
        <img src={exampleImage} height={"13px"} width={"13px"} />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="app-menu-appbar"
        anchorEl={anchorElApp}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElApp)}
        onClose={handleCloseAppMenu}
      >
        <DashboardPaneComponent
          appsMainURL={appsMainURL}
          handleActionable={() => {}}
          user={null}
          data={undefined}
          handleCloseUserMenu={() => {}}
          handleOpenNotification={() => {}}
          handleCloseNotification={() => {}}
          anchorElNotification={null}
          fetchMoreData={() => void {}}
          hasMore={false}
          pageNumber={0}
        />
      </Menu>
    </Box>
  );
};

export default DashboardIconComponent;
