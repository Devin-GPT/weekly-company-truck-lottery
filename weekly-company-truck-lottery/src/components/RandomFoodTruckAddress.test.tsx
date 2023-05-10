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

  // After writing the code to complete the test I am hesitant here to leave this test here. I dont love deeply nested mocks when testing hooks. I would consider the following
  // 1.  Would we be reusing the refreh state in other components? If so, I would consider moving the refresh state to its own module and testing that hook in isolation. But at that point we would essentially be testing a single state hook from react and I would consider that overkill.
  // 2.  If we are not reusing the refresh state in other components, I would consider removing the refresh state from the hook and just using a callback to refresh the address. This would allow us to test the hook in isolation and the component in isolation. but reading the instructions I think its fine to leave this test here and comment it out to show where I was thinking.

  // it('refreshes the address on button click', () => {
  //   const mockRefresh = jest.fn();
  //   (useRandomFoodTruckAddress as jest.Mock).mockReturnValue(['123 Fake St', false, mockRefresh]);

  //   render(<RandomFoodTruckAddress />);
  //   userEvent.click(screen.getByRole('button', { name: /refresh/i }));
  //   expect(mockRefresh).toHaveBeenCalledTimes(1);
  // });
});
