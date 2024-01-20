import React, { useRef } from "react";
import dpr from "../../assets/dpr.png";
import ncdmb from "../../assets/ncdmb.png";
import nipex from "../../assets/nipex2.png";
import nogic from "../../assets/nogic2.png";
import nsitf from "../../assets/nsitf-fotor.png";
import "./certstyle.css";

const ContinuousSlider = () => {
	const certificationsRef = useRef(null);

	return (
		<>
			<h5
				ref={certificationsRef}
				className="sm:pt-4 ss:pt-10 text-4xl mb-8 font-bold text-center tracking-tight text-gray-900 dark:text-white"
			>
				Certifications and Licenses{" "}
			</h5>
			<h1 className="text-center lg:text-[24px] font-medium">
				Our competence to practice lies in compliance with industry standards
				and regulations.
			</h1>
			<h1 className="text-center lg:text-[24px] font-medium mb-8">
				We are fully registered with relevant professional bodies
			</h1>
			<div className="logos">
				<div className="logos-slide">
					<img
						src={nsitf}
						alt="nigeria social insurance trust fund logo"
						className="w-[400px] object-contain"
					/>
					<img
						src={ncdmb}
						alt="nigerian content development and monitoring board logo"
						className="w-[400px] object-contain"
					/>

					<img
						src={nogic}
						alt="nigerian oil and gas industry content joint qualification system logo"
						className="w-[400px] object-contain"
					/>
					<img
						src={nipex}
						alt="nigerian petroleum exchange logo"
						className="w-[400px] object-contain"
					/>

					<img
						src={dpr}
						alt="department of petroleum resources logo"
						className="w-[400px] object-contain"
					/>
				</div>
			</div>
			;
		</>
	);
};

export default ContinuousSlider;
