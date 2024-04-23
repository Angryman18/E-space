import RootLayout from "@/app/layout";
import { screen, render } from "@testing-library/react";

describe("Test for the Layout Component Rendering Properly", () => {
  beforeEach(() => {
    render(<RootLayout>Hello</RootLayout>);
  });

  it("Should Render Out the Layout Children", () => {
    const isChildRendering = screen.getByText("Hello");
    expect(isChildRendering).toBeVisible();
  });

  it("Should Render Out the body", () => {
    const isbodyVisible = screen.getByTestId("layout_body");
    expect(isbodyVisible).toBeVisible();
  });
});
