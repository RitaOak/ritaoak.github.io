import Header from "./components/header/header";
import { Hero } from "react-bulma-components";
import { Container } from "react-bulma-components";
//import Navbar from "./components/navigation/navbar";

function App() {
  return (
    <Hero className="hero is-fullheight background">
      <Hero.Header>{/* Navbar to add later */}</Hero.Header>
      <Hero.Body>
        <Container>
          {/* Main Section header */}
          <Header />
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default App;
