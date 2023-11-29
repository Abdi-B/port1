import './App.css';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar2 from './components/Navbar/navbar2';
import Port from './components/Portfolio/Port';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      
      <Navbar2 />
      <Intro />
      <Skills/>
      <Port />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
