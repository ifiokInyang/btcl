import React, { useEffect } from "react";
import Intro from "../../component/CompanyIntro/Intro";
import Solutions from "../../component/Solutions/Solutions";
import Partners from "../../component/Partners/Partners";
import SliderNew from "../../component/SliderNew/Slider";

const Home = () => {

	return (
		<>
			<SliderNew />
			<Intro />
			<Solutions />
			<Partners />
		</>
	);
};

export default Home;
