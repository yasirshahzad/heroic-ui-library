import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Input/InputField',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    label: '',
    value: '',
    error: '',
    placeholder: '',
  },
};

export const Label: Story = {
  args: {
    label: 'Username',
  },
};

export const Value: Story = {
  args: {
    value: 'Vaule here',
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'User here...',
  },
};

export const Error: Story = {
  args: {
    error: 'Please enter user name',
  },
};
