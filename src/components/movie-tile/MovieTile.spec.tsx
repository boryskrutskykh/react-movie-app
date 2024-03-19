import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieTile from './MovieTile';

describe('MovieTile Component', () => {
  const movie = {
    imageUrl: 'https://example.com/image.jpg',
    name: 'Test Movie',
    releaseYear: '2021',
    genres: ['Action', 'Adventure'],
  };

  test('renders MovieTile with correct data', () => {
    const { getByText, getByAltText } = render(<MovieTile movie={movie} onClick={() => {}} />);

    expect(getByAltText(movie.name)).toBeInTheDocument();
    expect(getByText(movie.name)).toBeInTheDocument();
    expect(getByText(movie.releaseYear)).toBeInTheDocument();
    expect(getByText(movie.genres.join(', '))).toBeInTheDocument();
  });

  test('clicking on MovieTile calls the onClick handler', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<MovieTile movie={movie} onClick={onClickMock} />);

    fireEvent.click(getByText(movie.name));
    expect(onClickMock).toHaveBeenCalled();
  });

  test('menu button toggles the context menu visibility', () => {
    const { getByText, getByRole, queryByText } = render(<MovieTile movie={movie} onClick={() => {}} />);

    // Context menu should not be visible initially
    expect(queryByText('Edit')).not.toBeInTheDocument();
    expect(queryByText('Delete')).not.toBeInTheDocument();

    // Click the menu button to show context menu
    fireEvent.click(getByRole('button', { name: '...' }));
    expect(getByText('Edit')).toBeInTheDocument();
    expect(getByText('Delete')).toBeInTheDocument();

    // Click again to hide
    fireEvent.click(getByRole('button', { name: '...' }));
    expect(queryByText('Edit')).not.toBeInTheDocument();
    expect(queryByText('Delete')).not.toBeInTheDocument();
  });
});
