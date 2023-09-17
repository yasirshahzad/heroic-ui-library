import type { Meta, StoryObj } from '@storybook/react';

import Notification from './Notification';

const meta = {
  title: 'Presentation/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { color: { size: 'radio', options: ['green', 'orange'] } },
} as Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

// Notification stories
export const NumericalCounter: Story = {
  args: {
    counter: 23,
    color: 'green',
  },
};

export const ExlaminationMark: Story = {
  args: {
    mark: true,
    color: 'orange',
  },
};
