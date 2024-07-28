import type { Meta, StoryObj } from "@storybook/react";

import { TextFields } from "./TextField";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/TextFields",
  component: TextFields,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof TextFields>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    id: "primary-text",
    Label: "Test Label",
    // variant: "filled",
    value: "Hello",
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    primary: true,
    id: "outlined-read-only-input",
    Label: "Test Label",
    // variant: "filled",
    value: "Hello",
    onChange: () => {},
    InputProps: {
      readOnly: true,
    },
    types: "disabled",
  },
};

export const ChipTextField: Story = {
  args: {
    primary: true,
    id: "outlined-read-only-input",
    Label: "Test Label",
    // variant: "filled",
    value: "Hello",
    onChange: () => {},
    InputProps: {
      readOnly: true,
    },
    withChip: "",
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
