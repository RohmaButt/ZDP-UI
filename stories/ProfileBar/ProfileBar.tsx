import { ProfileBarComponent } from "../../src/zdpComponents/ProfileBar";
import { ProfileBarProps1 } from "../../src/zdpComponents/ProfileBar/types";
import { notificationsData, userInfo } from "../MockedData";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";

/**
 * Primary UI component for user interaction
 */
export const ProfileBar = ({
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
  fetchMoreData,
  hasMore,
  pageNumber,
  ...props
}: ProfileBarProps1) => {
  return (
    // <BrowserRouter>
    <ProfileBarComponent
      pageNumber={pageNumber}
      hasMore={false}
      handleActionable={handleActionable}
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
      fetchMoreData={fetchMoreData}
      {...props}
    />
    // </BrowserRouter>
  );
};
