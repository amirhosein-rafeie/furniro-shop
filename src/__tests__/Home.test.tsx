import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Home Page rendred", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
