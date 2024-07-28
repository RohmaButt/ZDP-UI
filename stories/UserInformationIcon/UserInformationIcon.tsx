import UserInformationIconComponent from "../../src/zdpComponents/UserInformationIcon";
import {
  NotificationActionType,
  ProfileBarProps,
} from "../../src/zdpComponents/ProfileBar/types";
import { notificationsData, userInfo } from "../MockedData";
import * as React from "react";

/**
 * Primary UI component for user interaction
 */
export const UserInformationIcon = ({
  handleCloseNotification,
  handleOpenNotification,
  handleOpenAppMenu,
  handleCloseAppMenu,
  handleOpenUserMenu,
  handleCloseUserMenu,
  handleActionable,
  anchorElNotification,
  anchorElApp,
  anchorElUser,
  hasMore,
  fetchMoreData,
  ...props
}: ProfileBarProps) => {
  return (
    <UserInformationIconComponent
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
      hasMore={hasMore}
      handleActionable={handleActionable}
      fetchMoreData={fetchMoreData}
    ></UserInformationIconComponent>
  );
};
