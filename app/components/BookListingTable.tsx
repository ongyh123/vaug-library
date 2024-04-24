"use client";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;
}

interface BookListingTableProps {
  books: Book[];
}

const BookListingTable: React.FC<BookListingTableProps> = ({ books }) => {
  const router = useRouter();

  return (
    <Table className="w-full overflow-x-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead className="text-center">Published Date (DD/MM/YYYY)</TableHead>
          <TableHead>Publisher</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.genre}</TableCell>
            <TableCell className="min-w-[250px]">{book.description}</TableCell>
            <TableCell>{book.isbn}</TableCell>
            <TableCell>
              {new Date(book.published).toLocaleDateString("en-GB")}
            </TableCell>
            <TableCell>{book.publisher}</TableCell>
            <TableCell>
              <Button
                variant="link"
                size="text"
                onClick={() => router.push(`/book/${book.id}`)}
              >
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BookListingTable;
