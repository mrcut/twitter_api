import { Searchbar } from "../components/Searchbar";
import { Container } from "react-bootstrap";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Container>
        <Searchbar />
      </Container>
    </>
  );
}
