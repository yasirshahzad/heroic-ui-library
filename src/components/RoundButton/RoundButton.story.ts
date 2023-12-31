import type { Meta, StoryObj } from '@storybook/react';
import RoundButton from './RoundButton';
import { BtnType } from './RoundButton.types';

const meta = {
  title: 'Buttons/Round',
  component: RoundButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: { btnType: {} },
} as Meta<typeof RoundButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArrowUp: Story = {
  args: {
    btnType: BtnType['arrow-up-orange'],
    size: 'medium',
  },
};

export const ArrowRight: Story = {
  args: {
    btnType: BtnType['arrow-right-orange'],
    size: 'medium',
  },
};

export const PhoneChat: Story = {
  args: {
    btnType: BtnType['phone-chats-direct-default'],
    size: 'medium',
    selected: false,
  },
};
