import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Credits from "./Pages/Credits";
import Contacto from "./Pages/Contacto";

function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/contactenos" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default WebRoutes;
