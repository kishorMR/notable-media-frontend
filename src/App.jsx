import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <>

      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
