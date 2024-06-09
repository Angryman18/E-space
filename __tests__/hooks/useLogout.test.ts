import useLogout from "@/hooks/useLogout";
import { renderHook } from "@testing-library/react";
import { signOut } from "@/utils/auth-util";

jest.mock("@/utils/auth-util", () => ({ __esModule: true, signOut: jest.fn() }));

describe("useLogout", () => {
  beforeAll(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      writable: true,
      value: { replace: jest.fn() },
    });
  });
  it("Should have called the replace and sigout function", async () => {
    const { result } = renderHook(() => useLogout());
    const replaceFn = jest.spyOn(window.location, "replace").mockImplementation(() => ({}));
    result.current();
    expect(signOut).toHaveBeenCalled();
    expect(replaceFn).toHaveBeenCalled();
  });
});
