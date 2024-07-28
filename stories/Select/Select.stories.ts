import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    value: "hello",
    handleValueChange: () => {},
    options: [
      { val: "hello", label: "hello" },
      { val: "hello1", label: "hello1" },
    ],
    label: "Test Label",
    labelVariant: "",
  },
};

// export const Secondary: Story = {
//   args: {
//     primary: true,
//     value: "hello",
//     handleValueChange: () => {},
//     options: [
//       { val: "hello", label: "hello" },
//       { val: "hello1", label: "hello1" },
//     ],
//     label: "Test Label",
//     labelVariant: "",
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
