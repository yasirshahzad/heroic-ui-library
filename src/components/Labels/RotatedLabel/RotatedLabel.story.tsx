import { Meta, StoryObj } from '@storybook/react';
import RotatedLabel from './RotatedLabel';

const meta = {
  title: 'Presentation/Labels/Rotated Labels',
  component: RotatedLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    color: {
      control: 'multi-select',
      options: ['red', 'green', 'darkBlue', 'orange', 'yellow', 'blue', 'pink', 'purple'],
    },
  },
} as Meta<typeof RotatedLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rotated: Story = {
  args: {
    text: 'quick chat',
    color: 'pink',
  },
};
