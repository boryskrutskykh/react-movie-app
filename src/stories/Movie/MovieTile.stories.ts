import type { Meta, StoryObj } from '@storybook/react';
import MovieTile from '../../components/movie-tile/MovieTile';
import { MovieTileProps } from '../../components/movie-tile/movie-tyle.types';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyStory/MovieTile',
  component: MovieTile,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;
const sampleMovie = {
  imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  name: 'Inception',
  releaseYear: '2010',
  genres: ['Action', 'Drama'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: StoryObj<MovieTileProps> = {
  args: {
    movie: sampleMovie,
    onClick: () => console.log('MovieTile clicked'),
  },
};
