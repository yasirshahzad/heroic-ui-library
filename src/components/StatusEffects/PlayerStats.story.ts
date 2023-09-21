import type { Meta, StoryObj } from '@storybook/react';
import PlayerStats from './PlayerStats';

const meta = {
  title: 'Inventory/PlayerStats',
  component: PlayerStats,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  /*
   *Select rarity level.
   */
  argTypes: { stats: { control: 'inline-radio', options: ['power', 'health', 'defence'] } },
} as Meta<typeof PlayerStats>;

export default meta;

type Story = StoryObj<typeof PlayerStats>;

// Junk
export const PlayerStat: Story = { args: { stats: 'power', buffs: 30 } };
