import type { Meta, StoryObj } from '@storybook/react';
import { RoundButton } from './RoundButton';

const meta = {
  title: 'Buttons/Round',
  component: RoundButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
} as Meta<typeof RoundButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArrowUp: Story = {
  args: {
    btnType: 'arrow-up-orange',
    size: 'medium',
  },
};

export const ArrowRight: Story = {
  args: {
    btnType: 'arrow-right-orange',
    size: 'medium',
  },
};

export const ArrowDown: Story = {
  args: {
    btnType: 'arrow-down-orange',
    size: 'medium',
  },
};

export const ArrowLeft: Story = {
  args: {
    btnType: 'arrow-left-orange',
    size: 'medium',
  },
};
