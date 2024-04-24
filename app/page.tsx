"use client";

import { Button } from "./components/Button";
import Container from "./components/Container";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <Button onClick={() => router.push("/book")}>Go to Book Page</Button>
    </Container>
  );
}
