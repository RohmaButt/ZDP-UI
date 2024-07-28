import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    // label: "Save",
    // types: "save",
    sx: { backgroundColor: "red", width: "50px", height: "50px" },
  },
};

// export const Secondary: Story = {
//   args: {
//     label: "Cancel",
//     types: "cancel",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
