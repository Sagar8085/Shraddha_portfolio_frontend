import "./App.css";
import NavigationBar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contacts from "./pages/Contact/Contacts";
// import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Project/Projects";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contacts />} />
        {/* <Route path="experience" element={<Experience />} /> */}
        <Route path="project" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
