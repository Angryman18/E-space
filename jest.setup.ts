import "@testing-library/jest-dom";

global.console = {
  ...global.console,
  error: () => {},
  warn: () => {},
};
