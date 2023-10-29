import React from "react";
import dpr from "../../assets/dpr.png";
import ncdmb from "../../assets/ncdmb.png";
import nipex from "../../assets/nipex2.png";
import nogic from "../../assets/nogic2.png";
import nsitf from "../../assets/nsitf-fotor.png";

const ContinuousSlider = () => {
	const logos = [nsitf, nipex, dpr, ncdmb, nogic];

	return (
		<>
			<h5 className="sm:pt-4 ss:pt-10 text-4xl mb-8 font-bold text-center tracking-tight text-gray-900 dark:text-white">
				Certifications and Licenses{" "}
			</h5>
			<h1 className="text-center lg:text-[24px] font-medium">
				Our competence to practice lies in compliance with industry standards
				and regulations.
			</h1>
			<h1 className="text-center lg:text-[24px] font-medium mb-8">
				We are fully registered with relevant professional bodies
			</h1>
			<div className="flex align-center justify-between w-full overflow-hidden h-[400px]">
				<div className="inline-block whitespace-nowrap animate-slide space-x-[140px]">
					{logos.map((logo, index) => (
						<div key={index} className="logo inline-block">
							<img src={logo} alt="..." width={"450px"} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ContinuousSlider;
