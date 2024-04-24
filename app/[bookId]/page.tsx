"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useParams } from "next/navigation";
import { Book } from "../components/BookListingTable";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/Table";
import Image from "next/image";

interface BookData {
  id: number;
}

export default function BookDetails() {
  const [book, setBook] = useState<Book | null>(null);
  const { bookId } = useParams<{ bookId: string }>();

  useEffect(() => {
    axios
      .get(`https://fakerapi.it/api/v1/books`)
      .then((response) => {
        const books = response.data.data;
        const selectedBook = books.find(
          (b: BookData) => b.id === parseInt(bookId)
        );
        if (selectedBook) {
          setBook(selectedBook);
        } else {
          console.error("Book not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [bookId]);

  if (!book) {
    return null;
  }

  console.log(book.image);

  return (
    <Container>
      <Table>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>{book.title}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Author</TableCell>
          <TableCell>{book.author}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Genre</TableCell>
          <TableCell>{book.genre}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Description</TableCell>
          <TableCell>{book.description}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>
            {book.image && (
              <Image
                alt={book.title}
                src={book.image}
                width={100}
                height={100}
              />
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>ISBN</TableCell>
          <TableCell>{book.isbn}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Published Date (DD/MM/YYYY)</TableCell>
          <TableCell>
            {new Date(book.published).toLocaleDateString("en-GB")}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Publisher</TableCell>
          <TableCell>{book.publisher}</TableCell>
        </TableRow>
      </Table>
    </Container>
  );
}
