import type { Meta, StoryObj } from "@storybook/react";
import { DashboardIcon } from "./DashboardIcon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/DashboardIcon",
  component: DashboardIcon,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DashboardIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

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
