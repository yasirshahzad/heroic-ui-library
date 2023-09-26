import { Meta, StoryObj } from '@storybook/react';
import RotatedLabels from './RotatedLabels';

const meta = {
  title: 'Labels/Rotated Labels',
  component: RotatedLabels,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['red', 'green', 'darkBlue', 'orange', 'yellow', 'blue', 'pink', 'purple'],
    },
  },
} as Meta<typeof RotatedLabels>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rotated: Story = {
  args: {
    text: 'quick chat',
    color: 'pink',
  },
};
