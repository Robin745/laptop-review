import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
	return (
		<div className="App bg-slate-200">
			<Header></Header>
			<Routes>
				<Route path="/home" element={<Home></Home>}></Route>
			</Routes>
		</div>
	);
}

export default App;
