import type { Meta, StoryObj } from "@storybook/react";
import { DashboardPane } from "./DashboardPane";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/DashboardPane",
  component: DashboardPane,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DashboardPane>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
//   const handleNotificationClick = () => {};

export const Primary: Story = {
  args: {
    handleCloseNotification: () => {},
    handleOpenNotification: () => {},
    handleOpenAppMenu: () => {},
    handleCloseAppMenu: () => {},
    handleOpenUserMenu: () => {},
    handleCloseUserMenu: () => {},
    anchorElNotification: null,
    anchorElApp: null,
    anchorElUser: null,
    user: null,
    hasMore: false,
  },
};
