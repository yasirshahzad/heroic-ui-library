import { Meta, StoryObj } from '@storybook/react';
import GeneralLabel from './GeneralLabel';

const meta = {
  title: 'Presentation/Labels/General Labels',
  component: GeneralLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
} as Meta<typeof GeneralLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    text: 'edit the wall',
  },
};
