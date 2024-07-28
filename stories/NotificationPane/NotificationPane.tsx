import {
  NotificationPaneComponent,
  NotificationPaneProps,
} from "../../src/zdpComponents/NotificationPane";
import { notificationsData, userInfo } from "../MockedData";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";

/**
 * Primary UI component for user interaction
 */
export const NotificationPane = ({ data, ...props }: NotificationPaneProps) => {
  return (
    <BrowserRouter>
      <NotificationPaneComponent
        data={notificationsData}
        user={userInfo}
        {...props}
      />
    </BrowserRouter>
  );
};
