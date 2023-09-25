import type { Meta, StoryObj } from '@storybook/react';
import BonusEffects from './BonusEffect';

const meta = {
  title: 'Inventory/BonusEffect',
  component: BonusEffects,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  /*
   *Select rarity level.
   */
  argTypes: { bonusType: { control: 'inline-radio', options: ['up', 'down', 'time'] } },
} as Meta<typeof BonusEffects>;

export default meta;

type Story = StoryObj<typeof BonusEffects>;

// Junk
export const BonusEffect: Story = {
  args: {
    bonusType: 'up',
    bonusText: 'Size',
  },
};
