import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  title: 'UI/Cards/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'text' },
    padding: {
      control: 'select',
      options: ['10px', '20px', '30px'],
      description: 'Padding for the card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'My Card',
    backgroundColor: '#fff',
    padding: '10px',
  },
};

export const Secondary: Story = {
  args: {
    title: 'My Card 2',
    backgroundColor: 'green',
    padding: '20px',
  },
};
