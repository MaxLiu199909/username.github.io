import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <NavBar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        
        <footer className="bg-gray-50 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
            <p> {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;