import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import User from "./components/User";

export default function App(){
  return(
    <main>
      <Navbar/>
      <User/>
      <Skills/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </main>
  )
}