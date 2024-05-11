import { screen, render } from "@testing-library/react";
import Page from "@/app/(root)/page";

describe("Test Run", () => {
  it("Should be be true", () => {
    render(<Page />);
    const text = screen.getByText("Toggle");
    expect(text).toBeVisible();
  });
});
