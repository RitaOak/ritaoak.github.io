/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <section class="hero is-medium background">
      <div class="hero-head">
        <Navbar />
      </div>

      <div class="hero-body">
        <div class="container">
          <Header />
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default App;
