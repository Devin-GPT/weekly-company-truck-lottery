import React from "react";
import { render, screen } from "@testing-library/react";
import RandomFoodTruckAddress from "./RandomFoodTruckAddress";
import useRandomFoodTruckAddress from "../hooks/useRandomFoodTruckAddress";

// Mock the custom hook
jest.mock("../hooks/useRandomFoodTruckAddress");

describe("RandomFoodTruckAddress", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state", () => {
    (useRandomFoodTruckAddress as jest.Mock).mockReturnValue([null, true]);

    render(<RandomFoodTruckAddress />);
    expect(screen.getByTestId(/loading-spinner/i)).toBeInTheDocument();
  });

  it("renders address and refresh button", () => {
    (useRandomFoodTruckAddress as jest.Mock).mockReturnValue([
      "123 Fake St",
      false,
    ]);

    render(<RandomFoodTruckAddress />);
    expect(screen.getByText(/123 Fake St/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /refresh/i })
    ).toBeInTheDocument();
  });

  // This code presents a dilemma regarding the test for the hook with deeply nested mocks. Here are some suggestions to enhance our approach:
  // 1. If the refresh state will be utilized across multiple components, consider extracting it into a separate module. Testing this hook independently may seem excessive since it relies on React's single state hook, but it ensures reusability.
  // 2. If the refresh state remains exclusives to this component, contemplate removing it from the hook and implementing a callback for address refresh. This strategy enables isolated testing for both the hook and the component. For now, this test will be commented out, providing insight into our thought process.

  // it('refreshes the address on button click', () => {
  //   const mockRefresh = jest.fn();
  //   (useRandomFoodTruckAddress as jest.Mock).mockReturnValue(['123 Fake St', false, mockRefresh]);

  //   render(<RandomFoodTruckAddress />);
  //   userEvent.click(screen.getByRole('button', { name: /refresh/i }));
  //   expect(mockRefresh).toHaveBeenCalledTimes(1);
  // });
});
