import { Meta, StoryObj } from '@storybook/react';
import KeyBind from './KeyBind';

const meta = {
  title: 'KeyBind/KeyBinds',
  component: KeyBind,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
} as Meta<typeof KeyBind>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GrayCircle: Story = {
  args: {
    type: 'grayCircle',
    seal: 'I',
  },
};
export const WhiteSquare: Story = {
  args: {
    type: 'whiteSquare',
    seal: 'E',
  },
};
