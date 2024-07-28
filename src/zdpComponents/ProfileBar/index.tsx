import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ProfileBarProps } from "./types";
import { getFriendlyName, getRole } from "./utils";
import DashboardIconComponent from "../DashboardIcon";
import { NotificationIconComponent } from "../NotificationIcon";
import UserInformationIconComponent from "../UserInformationIcon";
import "./index.css";
import * as React from "react";

export const ProfileBarComponent: React.FC<ProfileBarProps> = (props) => {
  const {
    user,
    data,
    handleOpenAppMenu,
    handleCloseAppMenu,
    anchorElApp,
    handleCloseNotification,
    handleOpenNotification,
    unReadNotificationsCount,
    anchorElNotification,
    handleOpenUserMenu,
    handleCloseUserMenu,
    anchorElUser,
    handleActionable,
    fetchMoreData,
    hasMore,
    pageNumber,
  } = props;

  return (
    <div className="pim-heading" style={{ display: "flex", padding: "10px" }}>
      <Typography
        sx={{
          paddingRight: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "15px",
          display: "flex",
          alignItems: "center",
          color: "#323E4D",
        }}
      >
        Admin
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "9px",
          isolation: "isolate",
          width: "250px",
          background: "#FFFFFF",
          boxShadow: "0px 8px 20px -3px rgba(19, 38, 64, 0.16)",
          borderRadius: "99999px",
          marginLeft: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <NotificationIconComponent
              handleActionable={handleActionable}
              handleOpenNotification={handleOpenNotification}
              handleCloseNotification={handleCloseNotification}
              handleCloseUserMenu={handleCloseUserMenu}
              user={user}
              anchorElNotification={anchorElNotification}
              data={data}
              unReadNotificationsCount={unReadNotificationsCount}
              fetchMoreData={fetchMoreData}
              hasMore={hasMore}
              pageNumber={pageNumber}
            />
            <DashboardIconComponent
              handleActionable={handleActionable}
              handleOpenNotification={handleOpenNotification}
              handleCloseNotification={handleCloseNotification}
              anchorElNotification={anchorElNotification}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenAppMenu={handleOpenAppMenu}
              handleCloseAppMenu={handleCloseAppMenu}
              anchorElApp={anchorElApp}
              user={user}
              data={data}
              fetchMoreData={fetchMoreData}
              hasMore={hasMore}
              pageNumber={pageNumber}
            />
            <UserInformationIconComponent
              handleActionable={handleActionable}
              handleOpenAppMenu={handleOpenAppMenu}
              handleCloseAppMenu={handleCloseAppMenu}
              anchorElApp={anchorElApp}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseUserMenu={handleCloseUserMenu}
              anchorElUser={anchorElUser}
              handleOpenNotification={handleOpenNotification}
              handleCloseNotification={handleCloseNotification}
              anchorElNotification={anchorElNotification}
              user={user}
              data={data}
              fetchMoreData={fetchMoreData}
              hasMore={hasMore}
              pageNumber={pageNumber}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "7px",
                marginRight: "15px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "13px",
                    lineHeight: "22px",
                    display: "flex",
                    color: "#121C2B",
                  }}
                >
                  {getFriendlyName(user?.user?.firstName || "")}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "11px",
                    lineHeight: "16px",
                    display: "flex",
                    textTransform: "uppercase",
                    color: "#00AEEF",
                  }}
                >
                  {getRole(user)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
