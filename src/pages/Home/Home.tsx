import React, { useEffect } from "react";
import Slider from "../../component/Slider/Slider";
import Intro from "../../component/CompanyIntro/Intro";
import Solutions from "../../component/Solutions/Solutions";
import Partners from "../../component/Partners/Partners";

const Home = () => {

	return (
		<>
			<Slider />
			<Intro />
			<Solutions />
			<Partners />
		</>
	);
};

export default Home;
