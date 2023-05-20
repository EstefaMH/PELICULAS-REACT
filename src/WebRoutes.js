import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Credits from "./Pages/Credits";
import Contacto from "./Pages/Contact";

function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/contactenos" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default WebRoutes;
