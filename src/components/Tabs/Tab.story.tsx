import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tab';

const meta = {
  title: 'Tabs/Regular',
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
export const Tab: Story = {
  args: {
    label: 'Mission',
    selected: false,
    disable: false,
  },
};
