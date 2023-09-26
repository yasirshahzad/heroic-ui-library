import { Meta, StoryObj } from '@storybook/react';
import GeneralLable from './GeneralLabel';

const meta = {
  title: 'Presentation/Labels/General Labels',
  component: GeneralLable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
} as Meta<typeof GeneralLable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    text: 'edit the wall',
  },
};
