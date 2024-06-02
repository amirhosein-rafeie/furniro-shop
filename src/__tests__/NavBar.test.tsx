import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("NavBar rendered without crash", () => {
  render(<NavBar />);
  const navbarElement = screen.getByTestId("nav");
  expect(navbarElement).toBeDefined();
});
