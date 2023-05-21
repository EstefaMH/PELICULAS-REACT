import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Credits from "./Pages/Credits";
import Movies from "./Pages/Movies";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default WebRoutes;
