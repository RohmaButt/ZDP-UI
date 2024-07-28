import Box from "@mui/material/Box";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton, Menu } from "@mui/material";
import { NotificationPaneComponent } from "../NotificationPane";
import { ProfileBarProps } from "../ProfileBar/types";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/mui.theme";
import * as React from "react";

export const NotificationIconComponent = (props: ProfileBarProps) => {
  const {
    anchorElNotification,
    handleOpenNotification,
    handleCloseNotification,
    unReadNotificationsCount,
    handleActionable,
    data,
    user,
    fetchMoreData,
    hasMore,
    pageNumber,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 0, top: 0, right: 0, left: 0, marginLeft: "20px" }}>
        <IconButton
          type="button"
          onClick={handleOpenNotification}
          sx={{
            fontSize: "medium",
            marginTop: 0,
            color: "#D1D3D4",
          }}
          aria-label="notifications"
        >
          {unReadNotificationsCount == 0 ? (
            <NotificationsIcon
              style={{
                height: "23px",
                width: "18px",
                color: "#C5C7D4",
              }}
            />
          ) : (
            <Badge
              badgeContent={unReadNotificationsCount || 0}
              color="primary"
              sx={{ color: "#323E4D", width: "18px", height: "18px" }}
            >
              <NotificationsIcon
                style={{
                  height: "23px",
                  width: "18px",
                  color: "#C5C7D4",
                }}
              />
            </Badge>
          )}
        </IconButton>
        <Menu
          sx={{
            right: 0,
            paddingTop: 0,
            top: 0,
          }}
          id="notif-menu-appbar"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            // component: MenuPaper,
            style: {
              paddingTop: 0,
              top: "0 !important",
              right: "0 !important",
              marginTop: 0,
              minHeight: "1008px",
            },
          }}
          keepMounted
          open={Boolean(anchorElNotification)}
          onClose={handleCloseNotification}
        >
          <NotificationPaneComponent
            data={data}
            user={user}
            handleActionable={handleActionable}
            fetchMoreData={fetchMoreData}
            hasMore={hasMore}
            pageNumber={pageNumber}
          />
        </Menu>
      </Box>
    </ThemeProvider>
  );
};
