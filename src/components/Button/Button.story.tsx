import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Buttons/Normal',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

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
