import type { Meta, StoryObj } from "@storybook/react";
import { ProfileBar } from "./ProfileBar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/ProfileBar",
  component: ProfileBar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProfileBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    handleOpenAppMenu: () => {},
    handleCloseAppMenu: () => {},
    handleOpenUserMenu: () => {},
    handleCloseUserMenu: () => {},
    handleCloseNotification: () => {},
    handleOpenNotification: () => {},
    anchorElNotification: null,
    hasMore: false,
  },
};
