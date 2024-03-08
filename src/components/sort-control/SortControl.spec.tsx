import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SortControl from './SortControl';

describe('SortControl Component', () => {
  test('calls onSortChange when a new sort option is selected', () => {
    const onSortChangeMock = jest.fn();
    render(<SortControl selectedSort="releaseDate" onSortChange={onSortChangeMock} />);

    fireEvent.change(screen.getByLabelText(/sort by:/i), { target: { value: 'title' } });
    expect(onSortChangeMock).toHaveBeenCalledWith('title');
  });

  test('renders options for sorting', () => {
    const onSortChangeMock = jest.fn();
    render(<SortControl selectedSort="releaseDate" onSortChange={onSortChangeMock} />);

    expect(screen.getByRole('option', { name: 'Release Date' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Title' })).toBeInTheDocument();
  });
});
