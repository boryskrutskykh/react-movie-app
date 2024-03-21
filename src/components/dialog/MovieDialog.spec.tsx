import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDialog from './MovieDialog';

const mockClose = jest.fn();
const mockSubmit = jest.fn();

const initialMovieInfo = {
  id: 1,
  imageUrl: 'https://example.com/movie-poster.jpg',
  name: 'Inception',
  releaseYear: '2010',
  genres: ['Action', 'Adventure', 'Sci-Fi'],
  rating: '8.8',
  duration: '148',
  description:
    'A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
};

describe('MovieDialog', () => {
  it('renders correctly when open', () => {
    render(
      <MovieDialog
        title="Edit Movie"
        isOpen={true}
        onClose={mockClose}
        initialMovieInfo={initialMovieInfo}
        onSubmit={mockSubmit}
      />,
    );
    expect(screen.getByText('Edit Movie')).toBeInTheDocument();
    expect(screen.getByLabelText('TITLE:')).toHaveValue(initialMovieInfo.name);
  });

  it('does not render when closed', () => {
    const { container } = render(
      <MovieDialog
        title="Edit Movie"
        isOpen={false}
        onClose={mockClose}
        initialMovieInfo={initialMovieInfo}
        onSubmit={mockSubmit}
      />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('calls onClose when the close button is clicked', () => {
    render(
      <MovieDialog
        title="Edit Movie"
        isOpen={true}
        onClose={mockClose}
        initialMovieInfo={initialMovieInfo}
        onSubmit={mockSubmit}
      />,
    );
    fireEvent.click(screen.getByText('×'));
    expect(mockClose).toHaveBeenCalled();
  });
});
