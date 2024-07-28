import type { Meta, StoryObj } from "@storybook/react";

import { Typograhys } from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Typography",
  component: Typograhys,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Typograhys>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Some Text",
    variant: "HomeBold",
  },
};

export const Secondary: Story = {
  args: {
    variant: "SubTitle",
    children: "Some Text",
  },
};

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
