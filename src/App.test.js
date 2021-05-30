import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const initialState = { error: '' };
const mockStore = configureStore();

function renderComponent() {
    let store = mockStore(initialState);
    return render(<Provider store={store}><App /></Provider>)
}

test('renders Currency Converter component', () => {
    renderComponent(<App />);
    const linkElement = screen.getByText(/Currency Converter/i);
  expect(linkElement).toBeInTheDocument();
});
