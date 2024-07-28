import UserInformationPaneComponent from "../../src/zdpComponents/UserInformationPane";
import { ProfileBarProps } from "../../src/zdpComponents/ProfileBar/types";
import { notificationsData, userInfo } from "../MockedData";
import * as React from "react";

/**
 * Primary UI component for user interaction
 */
export const UserInformationPane = ({
  handleCloseNotification,
  handleOpenNotification,
  handleOpenAppMenu,
  handleCloseAppMenu,
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElNotification,
  anchorElApp,
  anchorElUser,
  ...props
}: ProfileBarProps) => {
  return (
    <UserInformationPaneComponent
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
    ></UserInformationPaneComponent>
  );
};
