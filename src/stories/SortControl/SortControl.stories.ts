import type { Meta, StoryObj } from '@storybook/react';
import SortControl from "../../components/sort-control/SortControl";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyStory/SortControl',
  component: SortControl,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    selectedSort: {
      control: { type: 'select', options: ['releaseDate', 'title'] },
      description: 'Selected sort option',
    },
    onSortChange: {
      action: 'sortChanged',
      description: 'Function called when the sort option changes',
    },
  },
} satisfies Meta<typeof SortControl>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: StoryObj<typeof meta> = {
  args: {
    selectedSort: 'releaseDate',
  },
};