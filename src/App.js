import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer";
import About from "./components/About";
import Experiences from "./components/Experiences";

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
