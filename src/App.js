import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./infoblocks/Navigation/NavigationBar";
import Home from "./pages/Home";
import ArchitectPersonalInfo from "./pages/ArchitectPersonalInfo";

function App() {
	return (
		<>
			<Routes>
				<Route path="Architects-of-Belarus/" element={<NavigationBar />}>
					<Route index element={<Home />} />
					<Route path="architects" element={<h1> asldf</h1>} />
					<Route path="architects/:id" element={<ArchitectPersonalInfo />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
