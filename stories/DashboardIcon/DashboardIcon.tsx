import * as React from "react";
import DashboardIconComponent from "../../src/zdpComponents/DashboardIcon";
import { ProfileBarProps } from "../../src/zdpComponents/ProfileBar/types";
import { notificationsData, userInfo } from "../MockedData";

/**
 * Primary UI component for user interaction
 */
export const DashboardIcon = ({
  handleCloseNotification,
  handleOpenNotification,
  handleActionable,
  handleOpenAppMenu,
  handleCloseAppMenu,
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElNotification,
  anchorElApp,
  anchorElUser,
  fetchMoreData,
  ...props
}: ProfileBarProps) => {
  return (
    <DashboardIconComponent
      handleCloseNotification={handleCloseNotification}
      handleOpenNotification={handleOpenNotification}
      handleOpenAppMenu={handleOpenAppMenu}
      handleCloseAppMenu={handleCloseAppMenu}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      anchorElNotification={anchorElNotification}
      anchorElApp={anchorElApp}
      anchorElUser={anchorElUser}
      user={userInfo}
      data={notificationsData}
      handleActionable={handleActionable}
      fetchMoreData={fetchMoreData}
      hasMore={false}
    ></DashboardIconComponent>
  );
};
