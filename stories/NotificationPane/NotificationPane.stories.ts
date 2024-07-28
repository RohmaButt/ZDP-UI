import type { Meta, StoryObj } from "@storybook/react";
import { NotificationPane } from "./NotificationPane";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/NotifcationPane",
  component: NotificationPane,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NotificationPane>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    data: null,
  },
};
