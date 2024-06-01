import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

const { useRouter, mockedRouterPush } = vi.hoisted(() => {
  const mockedRouterPush = vi.fn();
  return {
    useRouter: () => ({ push: mockedRouterPush }),
    mockedRouterPush,
  };
});

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter,
  };
});

test("NavBar rendered without crash", () => {
  render(<NavBar />);
  const navbarElement = screen.getByTestId("nav");
  expect(navbarElement).toBeDefined();
});
