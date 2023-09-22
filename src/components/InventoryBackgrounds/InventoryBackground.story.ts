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
  },
} as Meta<typeof InventoryBackground>;

export default meta;

type Story = StoryObj<typeof InventoryBackground>;

// Junk
export const InventoryBackgrounds: Story = {
  args: {},
};
