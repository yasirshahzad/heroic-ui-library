import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tab';

const meta = {
  title: 'Buttons/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

// Tabs stories
export const Default: Story = {
  args: {
    label: 'Mission',
    selected: false,
    disable: false,
  },
};

export const Selected: Story = {
  args: {
    label: 'Mission',
    selected: true,
    disable: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Mission',
    selected: false,
    disable: true,
  },
};
