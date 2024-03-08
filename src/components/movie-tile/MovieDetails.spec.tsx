import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetails from './MovieDetails';

describe('MovieDetails Component', () => {
  const movieDetails = {
    imageUrl: 'https://example.com/image.jpg',
    name: 'Test Movie',
    releaseYear: '2021',
    rating: '8.5',
    duration: '120 min',
    description: 'This is a test movie description.',
    genres: ['Action', 'Adventure'],
  };

  test('renders MovieDetails with correct data', () => {
    render(<MovieDetails movie={movieDetails} />);

    expect(screen.getByAltText(movieDetails.name)).toBeInTheDocument();
    expect(screen.getByText(movieDetails.name.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(movieDetails.rating)).toBeInTheDocument();
    expect(screen.getByText(movieDetails.genres.join(', '))).toBeInTheDocument();
    expect(screen.getByText(movieDetails.releaseYear)).toBeInTheDocument();
    expect(screen.getByText(movieDetails.duration)).toBeInTheDocument();
    expect(screen.getByText(movieDetails.description)).toBeInTheDocument();
  });
});
