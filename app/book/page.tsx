"use client";

import BookListingTable from "../components/BookListingTable";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";

export default function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/books")
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container>
      {books && (
        <div className="relative w-full overflow-x-auto">
          <BookListingTable books={books} />
        </div>
      )}
    </Container>
  );
}
