import "./App.scss";
import Nav from "./components/Nav";
import History from "./components/History";
import Devs from "./components/Devs";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <section>
        <Nav />
        <History />
        <Devs />
        <Contact />
        <Form />
        <Footer />
      </section>
    </div>
  );
}

export default App;
