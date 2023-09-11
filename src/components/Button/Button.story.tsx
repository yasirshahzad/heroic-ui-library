import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

const meta = {
  title: 'Buttons/Normal',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Button>;

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
