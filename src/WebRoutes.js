import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Credits from "./Pages/Credits";
import Movies from "./Pages/Movies";
import About from "./Pages/About";

function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </Router>
  );
}

export default WebRoutes;
