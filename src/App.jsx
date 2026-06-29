import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Services />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </>
  );
}
