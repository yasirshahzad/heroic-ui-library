import type { Meta, StoryObj } from '@storybook/react';
import RarityLabel from './RarityLabel';

const meta = {
  title: 'Inventory/RarityLabel',
  component: RarityLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  /*
   *Select rarity level.
   */
  argTypes: { rarity: { control: 'select', options: [1, 2, 3, 4, 5] } },
} as Meta<typeof RarityLabel>;

export default meta;

type Story = StoryObj<typeof RarityLabel>;

// Junk
export const Junk: Story = {
  args: { rarity: 1 },
};

// Epic
export const Epic: Story = {
  args: { rarity: 6 },
};

// Legendary
export const Legendary: Story = {
  args: { rarity: 5 },
};
