import type { Meta, StoryObj } from '@storybook/react';
import { GenreSelect } from "../../components";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyStory/GenreSelect',
  component: GenreSelect,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // Control the selectedGenre via select control in Storybook
    selectedGenre: {
      control: 'select',
      options: ['All', 'Drama', 'Comedy', 'Horror'], // Add all genres you want to be selectable
    },
    // If you have an onSelect handler you can action it
    onSelect: { action: 'selected' },
  },
} satisfies Meta<typeof GenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: StoryObj<typeof meta> = {
  args: {
    genres: ['All', 'Drama', 'Comedy', 'Horror'],
    selectedGenre: 'All',
  }
};