import { Meta, StoryObj } from '@storybook/react';
import TechLabel from './TechLabel';

const meta = {
  title: 'Presentation/Labels/Tech Labels',
  component: TechLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
} as Meta<typeof TechLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tech: Story = {
  args: {
    text: 'heroic merit exchange',
  },
};
