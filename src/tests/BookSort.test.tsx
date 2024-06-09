import { render, screen, fireEvent } from "@testing-library/react";
import { BookSort } from "../components/BookSort/BookSort";
import "@testing-library/jest-dom/extend-expect";

test("renders BookSort component", () => {
  const setSortBy = jest.fn();
  render(<BookSort setSortBy={setSortBy} />);

  expect(screen.getByText("Sortuj po")).toBeInTheDocument();
  expect(screen.getByText("Autor")).toBeInTheDocument();
  expect(screen.getByText("Tytuł")).toBeInTheDocument();
  expect(screen.getByText("ISBN")).toBeInTheDocument();
});

test("calls setSortBy with 'author' when 'Autor' is clicked", () => {
  const setSortBy = jest.fn();
  render(<BookSort setSortBy={setSortBy} />);

  fireEvent.click(screen.getByText("Autor"));
  expect(setSortBy).toHaveBeenCalledWith("author");
});

test("calls setSortBy with 'title' when 'Tytuł' is clicked", () => {
  const setSortBy = jest.fn();
  render(<BookSort setSortBy={setSortBy} />);

  fireEvent.click(screen.getByText("Tytuł"));
  expect(setSortBy).toHaveBeenCalledWith("title");
});

test("calls setSortBy with 'ISBN' when 'ISBN' is clicked", () => {
  const setSortBy = jest.fn();
  render(<BookSort setSortBy={setSortBy} />);

  fireEvent.click(screen.getByText("ISBN"));
  expect(setSortBy).toHaveBeenCalledWith("ISBN");
});
