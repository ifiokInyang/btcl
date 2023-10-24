import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Announcement from "./component/Announcement/Announcement";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";


function AppRoutes() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<React.Fragment>
			<Announcement />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				
			</Routes>
			<Footer />
		</React.Fragment>
	);
}

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}
export default App;
