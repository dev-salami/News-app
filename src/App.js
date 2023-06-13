import News from "./components/news";
import Tech from "./components/tech";
import World from "./components/world";
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
					<Route
						index
						element={<Football />}></Route>
					<Route
						path="/business"
						element={<Business />}></Route>
					<Route
						path="/news"
						element={<News />}></Route>
					<Route
						path="/technology"
						element={<Tech />}></Route>
					<Route
						path="/world"
						element={<World />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
