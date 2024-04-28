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
import AdminDashboard from "./Admin_pages/adminDashboard/AdminDashboard";
import AdminBlogs from "./Admin_pages/adminBlog/AdminBlogs";
import AdminProjects from "./Admin_pages/adminProjects/AdminProjects";
import AdminProfile from "./Admin_pages/Profile/AdminProfile";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="project" element={<Projects />} />
        <Route path="admin" element={<AdminDashboard />}>
          <Route path="blog" element={<AdminBlogs />} />
          <Route path="project" element={<AdminProjects />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
