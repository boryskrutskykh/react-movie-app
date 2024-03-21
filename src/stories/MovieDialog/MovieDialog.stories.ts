import type { Meta, StoryObj } from '@storybook/react';
import { MovieInfo } from '../../components/movie-tile/movie-tyle.types';
import MovieDialog from '../../components/dialog/MovieDialog';
import Dialog from '../../components/dialog/Dialog';

const sampleMovieInfo: MovieInfo = {
  imageUrl: 'https://example.com/movie-poster.jpg',
  name: 'Inception',
  releaseYear: '2010',
  genres: ['Action', 'Adventure', 'Sci-Fi'],
  rating: '8.8',
  duration: '148 min',
  description:
    'A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
};

const meta = {
  title: 'MyStory/MovieDialog',
  component: MovieDialog,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MovieDialog>;

export default meta;

export const EditMovieDialog: StoryObj<typeof MovieDialog> = {
  args: {
    isOpen: true,
    onClose: () => console.log('Dialog closed'),
    initialMovieInfo: sampleMovieInfo,
    onSubmit: (movieInfo) => console.log('Submitted movie info:', movieInfo),
    title: 'Edit Movie',
  },
};

export const AddNewMovieDialog: StoryObj<typeof MovieDialog> = {
  args: {
    isOpen: true,
    onClose: () => console.log('Dialog closed'),
    initialMovieInfo: undefined,
    onSubmit: (movieInfo) => console.log('Submitted new movie info:', movieInfo),
    title: 'Add New Movie',
  },
};

export const DeleteMovieDialog: StoryObj<typeof Dialog> = {
  args: {
    onClose: () => console.log('Dialog closed'),
    title: 'DELETE MOVIE',
    dialogType: 'delete',
  },
};
