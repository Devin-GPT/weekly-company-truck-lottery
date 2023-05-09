import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RandomFoodTruckAddress from './RandomFoodTruckAddress';
import useRandomFoodTruckAddress from './useRandomFoodTruckAddress';

// Mock the custom hook
jest.mock('./useRandomFoodTruckAddress');

describe('RandomFoodTruckAddress', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    (useRandomFoodTruckAddress as jest.Mock).mockReturnValue([null, true]);

    render(<RandomFoodTruckAddress />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders address and refresh button', () => {
    (useRandomFoodTruckAddress as jest.Mock).mockReturnValue(['123 Fake St', false]);

    render(<RandomFoodTruckAddress />);
    expect(screen.getByText(/123 Fake St/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /refresh/i })).toBeInTheDocument();
  });

  it('refreshes the address on button click', () => {
    const mockRefresh = jest.fn();
    (useRandomFoodTruckAddress as jest.Mock).mockReturnValue(['123 Fake St', false, mockRefresh]);

    render(<RandomFoodTruckAddress />);
    userEvent.click(screen.getByRole('button', { name: /refresh/i }));
    expect(mockRefresh).toHaveBeenCalledTimes(1);
  });
});
