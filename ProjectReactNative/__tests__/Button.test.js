import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../src/components/Button';

test('renders button with correct text and handles press event', () => {
  const mockPress = jest.fn(); // Mock function
  const { getByText } = render(<Button title="Click Me" onPress={mockPress} />);

  const button = getByText('Click Me');
  expect(button).toBeTruthy(); // Check if button renders

  fireEvent.press(button); // Simulate button press
  expect(mockPress).toHaveBeenCalledTimes(1); // Check if function was called
});
