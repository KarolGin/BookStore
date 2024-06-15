import { render, screen, waitFor } from "@testing-library/react";
import { BookList } from "../components/BookList/BookList";
import "@testing-library/jest-dom/extend-expect";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: "Test Book 1",
            isbn: 123456789,
            authors: ["Author 1"],
          },
          {
            id: 2,
            title: "Test Book 2",
            isbn: 987654321,
            authors: ["Author 2"],
          },
        ]),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

test("renders BookList component and fetches books", async () => {
  render(<BookList query=""/>);

  expect(screen.getByText("Liczba dostępnych pozycji:0")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Liczba dostępnych pozycji:2")).toBeInTheDocument();
  });

  expect(screen.getByText("Test Book 1")).toBeInTheDocument();
  expect(screen.getByText("Author 1")).toBeInTheDocument();
  expect(screen.getByText("Test Book 2")).toBeInTheDocument();
  expect(screen.getByText("Author 2")).toBeInTheDocument();
});
