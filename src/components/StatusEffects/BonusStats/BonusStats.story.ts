import type { Meta, StoryObj } from '@storybook/react';
import BonusStats from './BonusStats';

const meta = {
  title: 'Inventory/BonusEffect',
  component: BonusStats,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  /*
   *Select rarity level.
   */
  argTypes: { bonusType: { control: 'inline-radio', options: ['up', 'down', 'time'] } },
} as Meta<typeof BonusStats>;

export default meta;

type Story = StoryObj<typeof BonusStats>;

export const BonusEffectDefault: Story = {
  args: {
    bonusType: 'up',
    bonusText: 'Size',
  },
};
