import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the form title", () => {
  render(<App />);
  const titleElement = screen.getByText(/add user/i);
  expect(titleElement).toBeInTheDocument();
});
