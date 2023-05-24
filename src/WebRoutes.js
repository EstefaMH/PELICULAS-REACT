import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Credits from "./Pages/Credits";
import Movies from "./Pages/Movies";
import About from "./Pages/About";
import Search from "./Pages/Search";

function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </Router>
  );
}

export default WebRoutes;
