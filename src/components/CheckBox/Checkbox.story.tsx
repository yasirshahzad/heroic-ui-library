import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from './Checkbox';

const meta = {
  title: 'Forms/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { size: { control: 'radio', options: ['small', 'medium', 'large'] } },
} as Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof CheckBox>;

// CheckBox
export const Checkbox: Story = {
  args: {
    size: 'small',
    selected: false,
    crossed: false,
  },
};
