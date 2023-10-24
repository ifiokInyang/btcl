import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/about-us.png";
import rig from "../../assets/rig1.jpeg";
import { TbTargetArrow } from "react-icons/tb";
import { IoTelescopeSharp } from "react-icons/io5";

const About = () => {
	return (
		<>
			<img
				src={aboutImg}
				alt="about image-mitaka"
				className="md:h-[500px] w-full object-cover"
			/>
			<div className="flex flex-wrap md:my-[8rem] ss:my-[4rem] px-4 w-full">
				<div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
					<img
						src={rig}
						className="h-auto md:max-w-md ss:max-w-ss rounded-lg"
						// width={"200px"}
						alt="three pipelines in a forest area"
					/>
				</div>
				<div className="md:w-[50%] ss:w-full mr-0">
					<p className="font-bold md:text-[35px] ss:text-[20px] break-normal">
						Who we are
					</p>
					<p className="md:text-[20px] ss:text-[15px] my-8 font-normal">
						Bensmartech Limited is a leading innovator and provider of
						cutting-edge protection and surveillance solutions, specializing in
						safeguarding critical infrastructure in the Oil and Gas Industry.
						With our patented technologies, we've established a solid track
						record in the industry, offering a comprehensive range of services
						that encompass well head protection, pipeline surveillance, flood
						and erosion control systems, and expert workforce provisioning.
					</p>
					<p className="md:text-[20px] ss:text-[15px] my-8 font-normal">
						Committed to unwavering infrastructure safety and reliability, we
						specialize in state-of-the-art technology for asset protection and
						monitoring. Our experienced team excels in tailoring holistic
						solutions to exceed client needs, with global recognition from
						top-tier IOCs through strategic partnerships.
					</p>
					<button
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<Link to={"/about"}>
							Learn More
							<svg
								className="w-3.5 h-3.5 ml-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default About;
