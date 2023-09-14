import type { Meta, StoryObj } from '@storybook/react';
import TechButton from './TechButton';

const meta = {
  title: 'Buttons/TechButton',
  component: TechButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof TechButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// Buttons stories
export const Green: Story = {
  args: {
    label: 'Button',
    btnType: 'green',
  },
};

export const Blue: Story = {
  args: {
    label: 'Button',
    btnType: 'blue',
  },
};
export const LightBlue: Story = {
  args: {
    label: 'Button',
    btnType: 'lightblue',
  },
};
export const Orange: Story = {
  args: {
    label: 'Button',
    btnType: 'orange',
  },
};

export const Red: Story = {
  args: {
    label: 'Button',
    btnType: 'red',
  },
};
export const Gray: Story = {
  args: {
    label: 'Button',
    btnType: 'gray',
  },
};
