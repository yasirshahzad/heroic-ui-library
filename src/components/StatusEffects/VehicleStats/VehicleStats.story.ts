import type { Meta, StoryObj } from '@storybook/react';
import VehicleStats from './VehicleStats';

const meta = {
  title: 'Inventory/VehicleStats',
  component: VehicleStats,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  /*
   *Select rarity level.
   */
  argTypes: {},
} as Meta<typeof VehicleStats>;

export default meta;

type Story = StoryObj<typeof VehicleStats>;

// Junk
export const VehicleStat: Story = {
  args: {
    VehicleStat: 'speed',
    vehicleBuffs: 10,
  },
};
