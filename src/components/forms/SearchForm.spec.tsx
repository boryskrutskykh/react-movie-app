import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
    test('renders an input with the value equal to initial value passed in props', () => {
        const initialValue = "Initial Query";
        render(<SearchForm initialQuery={initialValue} onSearch={jest.fn()}/>);

        const inputElement = screen.getByPlaceholderText(/what do you want to watch?/i);
        expect(inputElement).toHaveValue(initialValue);
    });

    test('after typing to the input and a "click" event on the Submit button, the "onSearch" prop is called with proper value', () => {
        const onSearchMock = jest.fn();
        const newValue = "New Query";
        render(<SearchForm initialQuery="" onSearch={onSearchMock}/>);

        const inputElement = screen.getByPlaceholderText(/what do you want to watch?/i);
        fireEvent.change(inputElement, {target: {value: newValue}});
        fireEvent.click(screen.getByText(/search/i));

        expect(onSearchMock).toHaveBeenCalledWith(newValue);
    });

    test('after typing to the input and pressing Enter key, the "onSearch" prop is called with proper value', () => {
        const onSearchMock = jest.fn();
        const newValue = "New Query";
        render(<SearchForm initialQuery="" onSearch={onSearchMock}/>);

        const inputElement = screen.getByPlaceholderText(/what do you want to watch?/i);
        fireEvent.change(inputElement, {target: {value: newValue}});
        fireEvent.keyUp(inputElement, {key: 'Enter'});

        expect(onSearchMock).toHaveBeenCalledWith(newValue);
    });
});
