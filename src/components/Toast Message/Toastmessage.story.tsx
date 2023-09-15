import type { Meta, StoryObj } from '@storybook/react';
import Toastmessage from './Toastmessage';

const meta = {
  title: 'Presentation/Toast Meaasage',
  component: Toastmessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Toastmessage>;

export default meta;

type Story = StoryObj<typeof Toastmessage>;

// CheckBox
export const Interact: Story = {
  args: {
    type: 'interact',
    statement: 'Press F to harvest the dragonfruits!',
  },
};
export const Warning: Story = {
  args: {
    statement: "You don't have enough to buy that!",
  },
};
export const Misc: Story = {
  args: {
    statement: 'Lorem ipsum dolor sit amet.',
  },
};
