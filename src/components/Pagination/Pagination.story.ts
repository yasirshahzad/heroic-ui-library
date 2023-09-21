import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './/Pagination';

const meta = {
  title: 'Presentation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  /*
   *Select rarity level.
   */
  argTypes: { onPageChange: { action: 'clicked' } },
} as Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

// Default
export const DefaultPagination: Story = {
  args: { currentPage: 1, pageSize: 3, totalCount: 20 },
};
