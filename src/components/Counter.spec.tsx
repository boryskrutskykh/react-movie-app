import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Counter} from './index'

describe('Counter Component', () => {
    test('renders initial value provided in props', () => {
        render(<Counter initialValue={5}/>);
        const valueElement = screen.getByText('5');
        expect(valueElement).toBeInTheDocument();
    });

    test('decrement button decrements the displayed value', () => {
        render(<Counter initialValue={5}/>);
        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);
        const valueElement = screen.getByText('4');
        expect(valueElement).toBeInTheDocument();
    });

    test('increment button increments the displayed value', () => {
        render(<Counter initialValue={5}/>);
        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);
        const valueElement = screen.getByText('6');
        expect(valueElement).toBeInTheDocument();
    });
});