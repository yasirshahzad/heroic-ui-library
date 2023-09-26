import { Meta, StoryObj } from '@storybook/react';
import TechLabels from './TechLabels';

const meta = {
  title: 'Labels/Tech Labels',
  component: TechLabels,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
} as Meta<typeof TechLabels>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tech: Story = {
  args: {
    text: 'heroic merit exchange',
  },
};
