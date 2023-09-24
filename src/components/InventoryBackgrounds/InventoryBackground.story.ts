import type { Meta, StoryObj } from '@storybook/react';
import InventoryBackground from './InventoryBackground';

const meta = {
  title: 'Inventory/InventoryBackground',
  component: InventoryBackground,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  /*
   *Select rarity level.
   */
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    geomatry: {
      control: 'inline-radio',
      options: ['square', 'circle'],
    },
    object: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
  },
} as Meta<typeof InventoryBackground>;

export default meta;

type Story = StoryObj<typeof InventoryBackground>;

// Junk
export const InventoryBackgrounds: Story = {
  args: {
    object: 2,
    size: 'large',
    geomatry: 'square',
    selected: false,
    equable: false,
  },
};
