import "./App.css";
import HeroSection from "./component/HeroSection";
import Projects from "./component/Projects";
import ContactSection from "./component/ContactSection";
import Header from "./component/Header";
import Book from "./component/Book";

function App() {
  return (
    <div className=" container md:container md:mx-auto md:px-32 px-2  mx-0">
      <Header />
      <HeroSection></HeroSection>

      <Projects></Projects>
      <ContactSection></ContactSection>
    </div>
  );
}

export default App;
