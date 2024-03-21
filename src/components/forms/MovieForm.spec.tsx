import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieForm from './MovieForm';

describe('MovieForm Component', () => {
  const initialMovieInfo = {
    imageUrl: 'https://example.com/image.jpg',
    name: 'Test Movie',
    releaseYear: '2021',
    genres: ['Action', 'Adventure'],
    rating: '8.5',
    duration: '120',
    description: 'This is a test movie description.',
  };

  const onSubmitMock = jest.fn();

  beforeEach(() => {
    render(<MovieForm initialMovieInfo={initialMovieInfo} onSubmit={onSubmitMock} />);
  });

  test('renders MovieForm with initial data', () => {
    expect(screen.getByDisplayValue(initialMovieInfo.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(initialMovieInfo.imageUrl)).toBeInTheDocument();
  });

  test('allows changing the input fields', () => {
    const titleInput = screen.getByDisplayValue(initialMovieInfo.name) as HTMLInputElement;
    fireEvent.change(titleInput, { target: { value: 'New Movie Title' } });
    expect(titleInput.value).toBe('New Movie Title');
  });
});
