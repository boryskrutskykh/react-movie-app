import type { Meta, StoryObj } from '@storybook/react';
import { MovieDetailsProps, MovieTileProps } from '../../components/movie-tile/movie-tyle.types';
import MovieDetails from '../../components/movie-tile/MovieDetails';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyStory/MovieDetails',
  component: MovieDetails,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleMovie = {
  imageUrl: 'https://via.placeholder.com/400x600',
  name: 'Inception',
  releaseYear: '2010',
  rating: '8.8',
  duration: '148min',
  description:
    'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
  genres: ['Action', 'Adventure', 'Sci-Fi'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: StoryObj<MovieDetailsProps> = {
  args: {
    movie: sampleMovie,
  },
};
