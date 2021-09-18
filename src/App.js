/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "./components/navigation/navbar";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Hero } from "react-bulma-components";
import { Container } from "react-bulma-components";

function App() {
  return (
    <Hero className="hero is-medium background">
      <Hero.Header>
        {/* Navbar */}
        <Navbar />
      </Hero.Header>
      <Hero.Body>
        <Container>
          {/* Main Section header */}
          <Header />
        </Container>
      </Hero.Body>
      {/* Footer */}
      <Footer />
    </Hero>
  );
}

export default App;
