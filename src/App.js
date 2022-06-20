import './App.css';
import * as React from 'react'
import Header from "./components/Home/Home"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
