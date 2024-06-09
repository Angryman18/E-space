import useCreateProfile from "@/hooks/useCreateProfile";
import { act, renderHook, waitFor } from "@testing-library/react";
import { createUserProfile } from "@/service/storeService";
import toast from "react-hot-toast";

jest.mock("@/service/storeService", () => ({
  __esModule: true,
  createUserProfile: jest.fn(() => Promise.resolve()),
}));

describe("useCreateProfile", () => {
  it("Should not call the createUserProfile if the profile id is provided", () => {
    const callback = jest.fn(() => Promise.resolve());
    const {result: {current}} = renderHook(() => useCreateProfile("abcd", callback));
    expect(createUserProfile).not.toHaveBeenCalled();
    expect(callback).not.toHaveBeenCalled();
    expect(current).toHaveProperty("loading")
  });
  it("Should call the createUserProfile if the profile id is not provided", async () => {
    const callback = jest.fn(() => Promise.resolve());
    const output = renderHook(() => useCreateProfile(null, callback));
    expect(createUserProfile).toHaveBeenCalled();
    await waitFor(() => expect(callback).toHaveBeenCalled());
    expect(output.result.current).toHaveProperty("loading");
  });
  it("On error throw should call the toast message function properly", () => {
    (createUserProfile as ReturnType<typeof jest.fn>).mockImplementation(() => {
      throw new Error();
    });
    const toastFn = jest.spyOn(toast, "error");
    const callback = jest.fn(() => Promise.resolve());
    const { result: {current} } = renderHook(() => useCreateProfile(null, callback));
    expect(createUserProfile).toThrow();
    expect(toastFn).toHaveBeenCalled();
    expect(current).toHaveProperty("loading");
  });
});
