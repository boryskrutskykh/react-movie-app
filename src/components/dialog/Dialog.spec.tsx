import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dialog from './Dialog';

describe('Dialog Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders with correct title and content', () => {
    const title = 'Dialog Title';
    const content = 'Dialog Content';

    render(
      <Dialog title={title} onClose={mockOnClose}>
        {content}
      </Dialog>,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    render(
      <Dialog title="Dialog" onClose={mockOnClose}>
        Content
      </Dialog>,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('applies different styles for edit and delete dialog types', () => {
    const { rerender } = render(
      <Dialog title="Edit Movie" onClose={mockOnClose} dialogType="edit">
        Edit Movie
      </Dialog>,
    );

    expect(screen.getByRole('dialog')).toHaveClass('dialogContent');

    rerender(
      <Dialog title="Delete Movie" onClose={mockOnClose} dialogType="delete">
        Delete Movie
      </Dialog>,
    );

    expect(screen.getByRole('dialog')).toHaveClass('deleteDialogContent');
  });
});
