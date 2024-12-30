import './App.css';

import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/projects';
import Resume from './components/Resume';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      <projectss />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume/>
    <Contact/>
    </div>
  );
}

export default App;
