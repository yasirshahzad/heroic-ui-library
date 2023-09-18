import type { Meta, StoryObj } from '@storybook/react';
import ToastMessage from './ToastMessage';

const meta = {
  title: 'Presentation/Toast Meaasage',
  component: ToastMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof ToastMessage>;

export default meta;

type Story = StoryObj<typeof ToastMessage>;

// Toast Message
export const Interact: Story = {
  args: {
    type: 'interact',
    statement: 'Press F to harvest the dragonfruits!',
  },
};

export const InteractWithNotificationGreen: Story = {
  args: {
    type: 'interact',
    statement: 'Press F to harvest the dragonfruits!',
    notification: { color: 'green', mark: true },
  },
};

export const InteractWithNotificationOrange: Story = {
  args: {
    type: 'interact',
    statement: 'Press F to harvest the dragonfruits!',
    notification: { color: 'orange', mark: true },
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    statement: "You don't have enough to buy that!",
  },
};

export const Misc: Story = {
  args: {
    type: 'misc',
    statement: 'Lorem ipsum dolor sit amet.',
  },
};
