import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import Page from "@/app/(root)/page";
import { MockThemeProvider } from "../__mock__/ContextMock";

describe("Test Run", () => {
  it("Should be be true", async () => {
    render(<Page />);
    const text = await waitFor(() => screen.getByText("Toggle"));
    expect(text).toBeVisible();
  });
  it("On Click the toggle the light/dark should work", async () => {
    const setFn = jest.fn();
    render(
      <MockThemeProvider value={{ handleSetTheme: setFn, theme: "dark", isDark: false }}>
        <Page />
      </MockThemeProvider>
    );
    const text = await waitFor(() => screen.getByText("Toggle"));
    fireEvent.click(text);
    expect(setFn).toHaveBeenCalled();
    expect(text).toBeVisible();
  });
});
