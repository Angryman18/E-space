import RootLayout from "@/app/(root)/layout";
import { TUser } from "@/types";
import { screen, render, waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

jest.mock("@/service/storeService", () => {
  return {
    __esModule: true,
    fetchUserInfo: jest.fn(() => Promise.resolve({fullname: "Shyam Mahanta"})),
  };
});

describe("Test for the Layout Component Rendering Properly", () => {
  beforeEach(() => {
    render(<RootLayout>Hello</RootLayout>);
  });

  it("Should Render Out the Layout Children", async () => {
    const isChildRendering = await waitFor(() => screen.getByText("Hello"));
    expect(isChildRendering).toBeVisible();
  });

  it("Should Render Out the body", async () => {
    const searchBar = await waitFor(() => screen.getByTestId("search-bar"));
    const recentSection = await waitFor(() => screen.getByTestId("recent-section"));
    const sidebar = await waitFor(() => screen.getByTestId("sidebar"));
    expect(searchBar).toBeVisible();
    expect(recentSection).toBeVisible();
    expect(sidebar).toBeVisible();
  });

  it("Should have shown the user's fullname properly", async () => {
    const fullname = await waitFor(() => screen.getByTestId("user:fullname"));
    const image = await waitFor(() => screen.getByTestId("user:image"));
    expect(fullname).toHaveTextContent("Shyam Mahanta");
    expect(image).toBeVisible();
  });
});
