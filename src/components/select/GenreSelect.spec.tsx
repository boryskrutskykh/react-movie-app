import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import GenreSelect from './GenreSelect';
import userEvent from "@testing-library/user-event"; //

describe('GenreSelect Component', () => {
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const selectedGenre = 'Comedy';
    const onSelectMock = jest.fn();

    test('renders all genres passed in props', () => {
        render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelectMock}/>);
        genres.forEach(genre => {
            const genreElement = screen.getByText(genre.toUpperCase());
            expect(genreElement).toBeInTheDocument();
        });
    });

    test('highlights a selected genre passed in props', () => {
        render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelectMock}/>);
        const selectedGenreElement = screen.getByText(selectedGenre.toUpperCase());
        expect(selectedGenreElement).toHaveClass('selected');
    });

    test('after a click event on a genre button component calls "onSelect" callback and passes correct genre in arguments', () => {
        render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelectMock}/>);
        const genreToSelect = 'Horror';
        const genreElement = screen.getByText(genreToSelect.toUpperCase());
        userEvent.click(genreElement);
        expect(onSelectMock).toHaveBeenCalledWith(genreToSelect);
    });
});
