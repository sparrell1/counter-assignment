// Import necessary react testing library helpers
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component
import Counter from '../components/Counter';

beforeEach(() => {
    // Render the Counter component before each test
    render(<Counter />);
});

test('renders counter message', () => {
    // Verify that the Counter message is rendered
    expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    // Verify that the initial count is 0
    const countElement = screen.getByTestId('count');
    expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
    // Simulate clicking the + button and check the incremented value
    const incrementButton = screen.getByText('+');
    const countElement = screen.getByTestId('count');

    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe('1');

    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe('2');
});

test('clicking - decrements the count', () => {
    // Simulate clicking the - button and check the decremented value
    const decrementButton = screen.getByText('-');
    const countElement = screen.getByTestId('count');

    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe('-1');

    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe('-2');
});
