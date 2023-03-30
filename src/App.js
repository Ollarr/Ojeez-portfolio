import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experiences />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
