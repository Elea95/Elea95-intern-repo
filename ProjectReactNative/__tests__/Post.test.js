import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import Post from '../src/components/Post';
import axiosInstance from '../src/api';

// Mock API response
jest.mock('../src/api', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: { title: 'Mocked Post Title' },
    })
  ),
}));

test('renders post data after API call', async () => {
  const { getByText, queryByText } = render(<Post />);

  expect(queryByText('Loading...')).toBeTruthy(); // Shows loading indicator

  await waitFor(() => expect(getByText('Mocked Post Title')).toBeTruthy()); // Wait for API data
});

test('handles API failure gracefully', async () => {
  axiosInstance.get.mockRejectedValueOnce(new Error('Network Error'));

  const { getByText, queryByText } = render(<Post />);

  expect(queryByText('Loading...')).toBeTruthy();

  await waitFor(() => expect(getByText('Failed to fetch data')).toBeTruthy());
});

test('retries API call on button press', async () => {
  const { getByText } = render(<Post />);

  await waitFor(() => expect(getByText('Mocked Post Title')).toBeTruthy());

  axiosInstance.get.mockResolvedValueOnce({
    data: { title: 'Updated Mocked Title' },
  });

  fireEvent.press(getByText('Retry'));

  await waitFor(() => expect(getByText('Updated Mocked Title')).toBeTruthy());
});
