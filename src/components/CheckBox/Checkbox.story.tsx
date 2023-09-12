import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from './checkbox';

const meta = {
  title: 'CheckBox/Animated CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof CheckBox>;

// CheckBox
export const checkbox: Story = {
  args: {
    Type: 'CheckBox',
    size: 'small',
    checked: false,
    crossed: false,
  },
};
