import useGetUserInformations from "@/hooks/useGetUserInfo";
import { fetchUserInfo } from "@/service/storeService";
import { renderHook } from "@testing-library/react";
import { Dispatch, SetStateAction } from "react";

jest.mock("@/service/storeService", () => {
  return {
    __esModule: true,
    fetchUserInfo: jest.fn(() => Promise.resolve("User Data")),
  };
});

describe("useGetUserInfo", () => {
  it("Should call the function to retrive the user's data", () => {
    const stateSetter: Dispatch<SetStateAction<any>> = jest.fn();
    const { result } = renderHook(() => useGetUserInformations(stateSetter));
    expect(fetchUserInfo).toHaveBeenCalled();
    expect(Object.keys(result.current)).toEqual(["user", "loading", "error"]);
  });
  it("Should be error true if the function throws error", () => {
    (fetchUserInfo as ReturnType<typeof jest.fn>).mockImplementation(() => {
      throw new Error("");
    });
    const removeConsole = jest.spyOn(global.console, "log").mockImplementation(() => ({}));
    const stateSetter: Dispatch<SetStateAction<any>> = jest.fn();
    const { result } = renderHook(() => useGetUserInformations(stateSetter));
    expect(fetchUserInfo).toThrow();
    expect(result.current.error).toBeTruthy();
    expect(result.current.user).toBe(undefined);
    removeConsole.mockRestore();
  });
});
