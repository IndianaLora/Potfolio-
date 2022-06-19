import './App.css';
import Header from "./components/Home/Home"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
