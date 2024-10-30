import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Projects from "./Components/Projects.jsx";
import data from "./projects.js";
import Skills from "./Components/Skills.jsx";
import Cursor from "./Components/Cursor/Cursor.jsx";
import Resume from "./Components/Resume/Resume.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
 
console.log(data);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects data={data} />
      <Skills />
      <Cursor />
      <Resume />
      <Blogs />
      <Contact />
      <Footer />
      </>
  );
}

export default App;
