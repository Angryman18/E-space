describe("removeCookies", () => {
  it("Should Execute the removeCookies command", async () => {
    jest.resetModules();
    const { removeCookies } = await import("@/utils/auth-util");
    const jsCookie = (await import("js-cookie")).default;
    const remove = jest.spyOn(jsCookie, "remove");
    removeCookies();
    expect(remove).toHaveBeenCalled();
  });
});