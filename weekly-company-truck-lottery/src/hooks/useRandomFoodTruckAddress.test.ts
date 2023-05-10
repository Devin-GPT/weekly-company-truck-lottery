import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useRandomFoodTruckAddress from './useRandomFoodTruckAddress';

// Mock the axios library
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useRandomFoodTruckAddress', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns a random address and loading state', async () => {
    const sampleData = [
      { address: 'Address 1' },
      { address: 'Address 2' },
      { address: 'Address 3' },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: sampleData });

    const { result, waitForNextUpdate } = renderHook(() => useRandomFoodTruckAddress());

    // Initial state
    expect(result.current[0]).toBeNull();
    expect(result.current[1]).toBe(true);

    // Wait for the hook to update
    await waitForNextUpdate();

    // Check if the address is one of the sample addresses and loading state is false
    expect(sampleData.map((item) => item.address)).toContain(result.current[0]);
    expect(result.current[1]).toBe(false);
  });

  it('handles errors', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

    const { result, waitForNextUpdate } = renderHook(() => useRandomFoodTruckAddress());

    // Initial state
    expect(result.current[0]).toBeNull();
    expect(result.current[1]).toBe(true);

    // Wait for the hook to update
    await waitForNextUpdate();

    // Check if the address is still null and loading state is false
    expect(result.current[0]).toBeNull();
    expect(result.current[1]).toBe(false);
  });
});
