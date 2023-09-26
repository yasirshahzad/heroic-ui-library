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
  argTypes: { vehicleStat: { control: 'inline-radio', options: ['speed', 'handling', 'weight'] } },
} as Meta<typeof VehicleStats>;

export default meta;

type Story = StoryObj<typeof VehicleStats>;

// Junk
export const VehicleStat: Story = {
  args: {
    vehicleStat: 'speed',
    vehicleBuffs: 10,
  },
};
