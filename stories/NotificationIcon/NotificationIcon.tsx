import { NotificationIconComponent } from "../../src/zdpComponents/NotificationIcon";
import { ProfileBarProps } from "../../src/zdpComponents/ProfileBar/types";
import { notificationsData, userInfo } from "../MockedData";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";

/**
 * Primary UI component for user interaction
 */
export const NotificationIcon = ({
  handleCloseNotification,
  handleOpenNotification,
  handleActionable,
  handleOpenAppMenu,
  handleCloseAppMenu,
  handleOpenUserMenu,
  handleCloseUserMenu,
  fetchMoreData,
  anchorElNotification,
  anchorElApp,
  anchorElUser,
  ...props
}: ProfileBarProps) => {
  return (
    <BrowserRouter>
      <NotificationIconComponent
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
    </BrowserRouter>
  );
};
