import axios from "axios";
import News from "./components/news";
import Tech from "./components/tech";
import World from "./components/world";
import Sports from "./components/sports";
import Business from "./components/business";
import Football from "./components/Football";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-[#0a192f]  ">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<News />}></Route>
          <Route path="/Business" element={<Business />}></Route>
          <Route path="/Football" element={<Football />}></Route>
          <Route path="/Technology" element={<Tech />}></Route>
          <Route path="/World" element={<World />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
