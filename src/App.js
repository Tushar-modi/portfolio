import Contact from "./components/Contact.js/contact";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar"
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
