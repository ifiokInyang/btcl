import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import services from "../../assets/services.jpg";
import ids from "../../assets/idsMain.jpeg";
import idsOne from "../../assets/ids1.jpeg";
import floodImg from "../../assets/f&e_nobg.png";
import sokuProject from "../../assets/sokuProject.png";

const Services = () => {
	useEffect(() => {
		const pipelineSection = document.getElementById("pipeline");
		const floodSection = document.getElementById("flood");

		const manPowerSection = document.getElementById("man");

		const retrievePipeline = localStorage.getItem("pipeline");
		const retrieveFlood = localStorage.getItem("flood");
		const retrieveMan = localStorage.getItem("man");

		if (retrieveFlood === "flood") {
			floodSection?.scrollIntoView({ behavior: "smooth" });
		} else if (retrievePipeline === "pipeline") {
			pipelineSection?.scrollIntoView({ behavior: "smooth" });
		} else if (retrieveMan === "man") {
			manPowerSection?.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<div>
			<div className="relative">
				<img
					src={services}
					alt="services cover image"
					className="md:h-[500px] w-full object-cover"
				/>
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl md:text-[100px] font-bold">
					Services
				</div>
			</div>
			<div className="flex flex-wrap ss:my-[4rem] px-4 ss:pl-4 xlg:pl-[76px] w-full">
				<div className="md:w-[50%] ss:w-full mr-0">
					<p className="font-bold md:text-[35px] ss:text-[20px] break-normal">
						Wellhead Protection System
					</p>
					<p className="md:text-[20px] ss:text-[15px] my-8 font-normal text-justify">
						Elevate the security of your wellhead infrastructure with our
						cutting-edge Wellhead Protection System. Our solution provides
						advanced monitoring and control to ensure the safety and integrity
						of your oil and gas operations, protecting against unauthorized
						access and security breaches. We utilize state-of-the-art technology
						and a team of experts to provide real-time monitoring and rapid
						response to potential threats, ensuring the continuous and secure
						operation of your wellheads. Trust us to safeguard your valuable
						assets and maintain the reliability of your energy production.
					</p>
				</div>
				<div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
					<img
						src={ids}
						className="h-[500px] md:max-w-md ss:max-w-ss rounded-lg object-contain"
						width={"300px"}
						alt="caged wellhead in a surveillance protection"
					/>
				</div>
			</div>{" "}
			<div
				className="flex flex-wrap ss:my-[4rem] ss:pr-4 xlg:pr-[76px] px-4 w-full"
				id="pipeline"
			>
				<div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
					<img
						src={idsOne}
						className="h-[500px] md:max-w-md ss:max-w-ss rounded-lg object-contain"
						// width={"600px"}
						alt="a well secured ids-enabled facility"
					/>
				</div>
				<div className="md:w-[50%] ss:w-full mr-0">
					<p className="font-bold md:text-[35px] ss:text-[20px] break-normal">
						Pipeline Protection System
					</p>
					<p className="md:text-[20px] ss:text-[15px] my-8 font-normal text-justify">
						Ensure the safety and reliability of your pipeline network with our
						state-of-the-art Pipeline Protection System. We employ advanced
						technology for continuous monitoring, helping to safeguard against
						security threats, unauthorized access, and operational disruptions.
						Our comprehensive solution includes the latest in surveillance and
						security technology, coupled with predictive analytics, to
						proactively identify and mitigate potential risks. With our
						expertise, your pipeline network will remain secure, efficient, and
						free from disruptions, ensuring the uninterrupted flow of vital
						resources.
					</p>
				</div>
			</div>{" "}
			<div
				className="flex flex-wrap ss:my-[4rem] ss:pl-4 xlg:pl-[76px] px-4 w-full"
				id="flood"
			>
				<div className="md:w-[50%] ss:w-full mr-0">
					<p className="font-bold md:text-[35px] ss:text-[20px] break-normal">
						Flood and Erosion Control System
					</p>
					<p className="md:text-[20px] ss:text-[15px] my-8 font-normal text-justify">
						Shield communities and critical infrastructure from the devastating
						effects of floods and erosion with our comprehensive Flood and
						Erosion Control System. Our solutions, including flood barriers and
						erosion-resistant measures, provide proactive protection against
						natural disasters. We work diligently to safeguard lives and
						property by implementing cutting-edge engineering solutions and
						utilizing environmentally friendly measures to mitigate the impact
						of these natural calamities. With our expertise, you can rest
						assured that your communities and vital infrastructure are shielded
						from the destructive forces of nature, promoting safety and
						resilience in the face of adversity.
					</p>
				</div>
				<div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
					<img
						src={floodImg}
						className="h-auto md:max-w-md ss:max-w-ss rounded-lg"
						// width={"200px"}
						alt="image of a flood and erosion control machinery"
					/>
				</div>
			</div>{" "}
			<div
				className="flex flex-wrap ss:my-[4rem] ss:pr-4 xlg:pr-[76px] px-4 w-full"
				id="man"
			>
				<div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
					<img
						src={sokuProject}
						className="h-[500px] md:max-w-md ss:max-w-ss rounded-lg object-contain"
						// width={"200px"}
						alt="men installing ids on a platform"
					/>
				</div>
				<div className="md:w-[50%] ss:w-full mr-0">
					<p className="font-bold md:text-[35px] ss:text-[20px] break-normal">
						Manpower Supply
					</p>
					<p className="md:text-[20px] ss:text-[15px] my-8 font-normal text-justify">
						Access a skilled and adaptable workforce through our Manpower Supply
						services. We deliver proficient personnel in the Oil and Gas
						industry to meet your operational demands and enhance productivity.
						Our commitment to excellence in staffing solutions means you can
						rely on us for qualified and dedicated professionals who are aligned
						with your business needs. With our extensive network and experience,
						we go beyond just supplying manpower for installation and
						maintenance of our intrusion detection systems; we conduct regular
						training for our personnels for competency assurance, promoting
						efficiency, and ensuring that your business operations run
						seamlessly. Count on us for personnels that can adapt and thrive in
						diverse environments, helping you achieve your operational
						objectives.
					</p>
				</div>
			</div>{" "}
		</div>
	);
};

export default Services;
