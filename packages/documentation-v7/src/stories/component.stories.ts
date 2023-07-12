import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'checkbox-element',
};

export default meta;
type Story = StoryObj;

export const Unchecked: Story = {
  args: {
    label: 'Unchecked',
  },
};
