import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { Research } from "./pages/Research";
import { UserProfile } from "./pages/UserProfile";
import { About } from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/research" element={<Research />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
