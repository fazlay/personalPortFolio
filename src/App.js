import "./App.css";
import HeroSection from "./component/HeroSection";
import Projects from "./component/Projects";
import ContactSection from "./component/ContactSection";
import Header from "./component/Header";

function App() {
  return (
    <div className=" container md:container md:mx-auto md:px-32 px-0  mx-0">
      <Header />
      <HeroSection></HeroSection>
      <mongoLogo></mongoLogo>
      <Projects></Projects>
      <ContactSection id="contact"></ContactSection>
    </div>
  );
}

export default App;
