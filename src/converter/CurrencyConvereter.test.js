import { render, fireEvent } from '@testing-library/react';
import CurrencyConverter from './CurrencyConverter';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);

function renderComponent() {
    return render(<Provider store={store}><CurrencyConverter /></Provider>)
}

test('renders Header', () => {
    const { getByText } = renderComponent();
    const headerElement = getByText(/Currency Converter/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders from currency input', () => {
    const { getByPlaceholderText } = renderComponent();
    const fromInput = getByPlaceholderText('eg. USD');   
    expect(fromInput).toBeInTheDocument();
});

test('renders to currency input', () => {
    const { getByPlaceholderText } = renderComponent();
    const toInput = getByPlaceholderText('eg. AUD');
    expect(toInput).toBeInTheDocument();
});

test('renders from amount input', () => {
    const { getByPlaceholderText } = renderComponent();
    const amount = getByPlaceholderText('eg. 100.00');
    expect(amount).toBeInTheDocument();
});

test('renders convert button', () => {
    const { getByText } = renderComponent();
    const convertButton = getByText('Convert');
    expect(convertButton).toBeInTheDocument();
});

test('blank input', () => {
    const { getByText } = renderComponent();
    const convertButton = getByText('Convert');    
    fireEvent.click(convertButton);
    const error = getByText('Kindly provide values for all fields!!');
    expect(error).toBeInTheDocument();
});

test('incorrect input', () => {
    const { getByText, getByPlaceholderText } = renderComponent();
    const fromInput = getByPlaceholderText('eg. USD');
    const toInput = getByPlaceholderText('eg. AUD');
    const amount = getByPlaceholderText('eg. 100.00');
    const convertButton = getByText('Convert');
    fireEvent.change(fromInput, { target: { value: '123' } });
    fireEvent.change(toInput, { target: { value: 'asd' } });
    fireEvent.change(amount, { target: { value: '100' } });
    fireEvent.click(convertButton);
    const error = getByText('Invalid Currency Code Entered !!');
    expect(error).toBeInTheDocument();
});

test('valid input with rate unavaialble', () => {
    const { getByText, getByPlaceholderText } = renderComponent();
    const fromInput = getByPlaceholderText('eg. USD');
    const toInput = getByPlaceholderText('eg. AUD');
    const amount = getByPlaceholderText('eg. 100.00');
    const convertButton = getByText('Convert');
    fireEvent.change(fromInput, { target: { value: 'INR' } });
    fireEvent.change(toInput, { target: { value: 'DKK' } });
    fireEvent.change(amount, { target: { value: '100' } });
    fireEvent.click(convertButton);
    const error = getByText('Rate not avaialabe for INRDKK !!');
    expect(error).toBeInTheDocument();
});

test('valid input with rate available', () => {
    const { getByText, getByPlaceholderText } = renderComponent();
    const fromInput = getByPlaceholderText('eg. USD');
    const toInput = getByPlaceholderText('eg. AUD');
    const amount = getByPlaceholderText('eg. 100.00');
    const convertButton = getByText('Convert');
    fireEvent.change(fromInput, { target: { value: 'AUD' } });
    fireEvent.change(toInput, { target: { value: 'DKK' } });
    fireEvent.change(amount, { target: { value: '100' } });
    fireEvent.click(convertButton);
    const error = getByText('Converted Amount : 505.76');
    expect(error).toBeInTheDocument();
});