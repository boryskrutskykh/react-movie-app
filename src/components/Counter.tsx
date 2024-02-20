import React from 'react';

interface CounterProps {
    initialValue: number;
}

interface CounterState {
    value: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = { value: props.initialValue };
    }

    increment = () => {
        this.setState((prevState) => ({ value: prevState.value + 1 }));
    };

    decrement = () => {
        this.setState((prevState) => ({ value: prevState.value - 1 }));
    };

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement('button', { onClick: this.decrement }, '-'),
            React.createElement('span', { style: { margin: '0 10px' } }, this.state.value.toString()),
            React.createElement('button', { onClick: this.increment }, '+')
        );
    }
}

export default Counter;
