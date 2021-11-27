import logo from './logo.svg';
import './App.css';
import HeroSection from './component/HeroSection';
import Projects from './component/Projects';
import ContactSection from './component/ContactSection';

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <Projects></Projects>
      <ContactSection></ContactSection>
    </div>
  );
}

export default App;
