import { Meta, StoryObj } from '@storybook/react';
import GeneralLables from './GeneralLables';

const meta = {
  title: 'Labels/General Labels',
  component: GeneralLables,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
} as Meta<typeof GeneralLables>;

export default meta;

type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    text: 'edit the wall',
  },
};
