import { render, screen } from "@testing-library/react";
import { Book } from "../components/Book/Book";
import "@testing-library/jest-dom/extend-expect";
import { BookType } from "../components/BookList/BookList";

const mockBook: BookType = {
  id: 1,
  title: "Test Book",
  isbn: 123456789,
  authors: ["Author 1", "Author 2"],
};

test("renders Book component", () => {
  render(<Book {...mockBook} />);

  expect(screen.getByAltText(mockBook.title)).toBeInTheDocument();
  expect(screen.getByText(mockBook.title)).toBeInTheDocument();
  expect(screen.getByText("Author 1")).toBeInTheDocument();
  expect(screen.getByText("Author 2")).toBeInTheDocument();
  expect(screen.getByText(`IBSN: ${mockBook.isbn}`)).toBeInTheDocument();
});
