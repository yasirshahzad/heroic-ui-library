import type { Meta, StoryObj } from '@storybook/react';
import Notification from './Notification';

const meta = {
  title: 'Notification/Regular',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

// Buttons stories
export const Green: Story = {
  args: {
    label: 'Button',
    btnType: 'green',
  },
};
