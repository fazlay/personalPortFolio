import "./App.css";
import HeroSection from "./component/HeroSection";
import Projects from "./component/Projects";
import ContactSection from "./component/ContactSection";
import Header from "./component/Header";
import { mongoLogo } from "./component/ReactLogo";

function App() {
  return (
    <div className="md:container md:mx-auto px-32 bg-yellow-100">
      <Header />
      <HeroSection></HeroSection>
      <mongoLogo></mongoLogo>
      <Projects></Projects>
      {/* <ContactSection></ContactSection> */}
    </div>
  );
}

export default App;
