import type { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from "../../components";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyStory/Search',
  component: SearchForm,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    initialQuery: {
      control: 'text',
      description: 'Initial query for the search input',
    },
    onSearch: {
      action: 'searched',
      description: 'Function to call when a search is executed',
    },
  },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: StoryObj<typeof meta> = {
  args: {
    initialQuery: 'test'
  }
};