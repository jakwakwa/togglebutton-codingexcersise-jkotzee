import type { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch from "./toggle-switch";

const meta = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["default", "subtle"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    width: {
      control: "select",
      options: ["intrinsic", "full"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    iconOnly: { control: "boolean" },
    leadingIcon: { control: "boolean" },
    trailingIcon: { control: "boolean" },
    label: { control: "text" },
    isChevron: { control: "boolean" },
  },
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

// Base story
export const Default: Story = {
  args: {
    appearance: "default",
    size: "sm",
    label: "Toggle Switch",
  },
};

// Variants
export const Subtle: Story = {
  args: {
    appearance: "subtle",
    label: "Subtle Toggle",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: true,
    label: "Leading Icon",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: true,
    label: "Trailing Icon",
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Toggle",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium Toggle",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Toggle",
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Toggle",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked Toggle",
  },
};

export const FullWidth: Story = {
  args: {
    width: "full",
    label: "Full Width Toggle",
  },
};

// Add new story for Chevron variant
export const WithChevron: Story = {
  args: {
    isChevron: true,
    leadingIcon: true,
    label: "Chevron Toggle",
  },
};

export const ChevronIconOnly: Story = {
  args: {
    isChevron: true,
    iconOnly: true,
  },
};
