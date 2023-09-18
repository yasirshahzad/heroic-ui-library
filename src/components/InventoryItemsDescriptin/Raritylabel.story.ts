import type { Meta, StoryObj } from '@storybook/react';
import Raritylabel from './Raritylabel';

const meta = {
  title: 'Inventory Items Description/Elements',
  component: Raritylabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  /*
   *Select rarity level.
   */
  argTypes: { rarity: { control: 'select', options: [1, 2, 3, 4, 5] } },
} as Meta<typeof Raritylabel>;

export default meta;

type Story = StoryObj<typeof Raritylabel>;

// CheckBox
export const Rarity: Story = {
  args: {},
};
