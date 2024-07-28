import DashboardPaneComponent from "../../src/zdpComponents/DashboardPane";
import { ProfileBarProps } from "../../src/zdpComponents/ProfileBar/types";
import { notificationsData, userInfo } from "../MockedData";
import * as React from "react";

/**
 * Primary UI component for user interaction
 */
export const DashboardPane = ({
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
    <DashboardPaneComponent
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
    />
  );
};
