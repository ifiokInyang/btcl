import React, { useEffect, useState } from "react";
import aboutImg from "../../assets/about-us.png";
import rig from "../../assets/rig1.jpeg";
import { TbTargetArrow } from "react-icons/tb";
import { IoTelescopeSharp } from "react-icons/io5";

const About = () => {
	const [showHSEPolicy, setShowHSEPolicy] = useState(false);
	const [showContentPolicy, setShowContentPolicy] = useState(false);

	useEffect(() => {
		const visionSection = document.getElementById("vision");
		const missionSection = document.getElementById("mission");

		const retrieveVision = localStorage.getItem("vision");
		const retrieveMission = localStorage.getItem("mission");

		if (retrieveMission === "mission") {
			missionSection?.scrollIntoView({ behavior: "smooth" });
		} else if (retrieveVision === "vision") {
			visionSection?.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const toggleShowHSEPolicy = () => {
		setShowHSEPolicy(!showHSEPolicy);
	};

	const toggleShowContentPolicy = () => {
		setShowContentPolicy(!showContentPolicy);
	};

	return (
		<>
			<img
				src={aboutImg}
				alt="about image-bensmartech"
				className="md:h-[500px] w-full object-cover"
			/>
			<div className="flex flex-wrap ss:my-[4rem] px-4 w-full">
				<div className="md:w-[50%] ss:w-full mr-0">
					<p className="font-bold md:text-[35px] ss:text-[20px] break-normal">
						Who we are
					</p>
					<p className="md:text-[20px] ss:text-[18px] my-8 font-normal">
						Bensmartech Limited is a leading innovator and provider of
						cutting-edge protection and surveillance solutions, specializing in
						safeguarding critical infrastructure in the Oil and Gas Industry.
						With our patented technologies, we've established a solid track
						record in the industry, offering a comprehensive range of services
						that encompass well head protection, pipeline surveillance, flood
						and erosion control systems, and expert workforce provisioning.
					</p>
					<p className="md:text-[20px] ss:text-[18px] my-8 font-normal">
						Committed to unwavering infrastructure safety and reliability, we
						specialize in state-of-the-art technology for asset protection and
						monitoring. Our experienced team excels in tailoring holistic
						solutions to exceed client needs, with global recognition from
						top-tier IOCs through strategic partnerships.
					</p>
				</div>
				<div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
					<img
						src={rig}
						className="h-auto md:max-w-md ss:max-w-ss rounded-lg"
						alt="three pipelines in a forest area"
					/>
				</div>
			</div>
			<div className="flex flex-wrap justify-center bg-[#fafbfc] space-x-8 h-auto mt-8 py-8">
				<div
					className="flex flex-col md:pl-8 ss:pl-2 justify-center h-[600px] text-white md:w-[400px] ss:w-[300px] bg-[black] rounded-lg font-bold"
					style={{ boxShadow: "4px 1px 15px red" }}
				>
					<p className="text-[24px] font-medium">Why we are the best...</p>

					<p className="text-[30px]">B.Ensmartech's Vision &amp; Mission</p>
				</div>
				<div className="lg:w-[50vw] ss:w-full space-y-16">
					<div id="mission" className="ss:mt-8 md:mt-0">
						<TbTargetArrow size={40} color="#33008b" />
						<p className="text-[34px] mt-4 font-bold">Our Mission</p>
						<p className="md:text-[20px] ss:text-[18px]">
							Become the nucleus of the security service delivery through
							commitment, diligence and innovative ideas. Helping Companies meet
							their operations targets and on schedule.
						</p>
					</div>
					<div id="vision">
						<IoTelescopeSharp size={40} color="#33008b" />
						<p className="text-[34px] mt-4 font-bold">Our Vision</p>
						<p className="md:text-[20px] ss:text-[18px]">
							To be every industry’s Point of Reference in the protection of all
							industrial assets/facilities.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap">
				<div className="lg:flex-1 px-8">
					<p className="font-bold md:text-[35px] ss:text-[20px] my-8 break-normal">
						HSE Policy
					</p>
					<section className="text-justify text-[18px]">
						<p>
							<strong>BTCL</strong> is committed to providing a safe and healthy
							workplace for all our employees, contractors/Sub-Contractors.
						</p>
						<p>
							<strong>BTCL</strong> believes that all injuries are preventable
							and excellence in health and safety is the key to our long term
							success. We are committed to compliance with any governmental
							agencies, regulations, and industry best practices and will use
							audits to measure and improve our health and safety programs.
						</p>
						{showHSEPolicy ? (
							<>
								<p>
									<strong>BTCL</strong> will hold all levels of management
									accountable for providing a safe work environment and
									enforcing safe work procedures and practices.{" "}
									<strong>BTCL</strong> will ensure that personnel(s) have the
									necessary knowledge to work safely.
								</p>
								<p>
									<strong>BTCL</strong> will hold all employees and contractors
									accountable for following safe work procedures and reporting
									unsafe acts and safety incidents. We will ensure timely
									follow-up to safety incidents. Workers have general
									responsibilities for their own health and safety and they have
									the responsibility to refuse unsafe work. Discriminatory
									action will not be taken against them for refusing to do
									unsafe work.
								</p>
							</>
						) : null}
						<button onClick={toggleShowHSEPolicy} className="text-blue-500 font-bold">
							{showHSEPolicy ? "See Less" : "See More"}
						</button>
					</section>
				</div>
				<div className="lg:flex-1 px-8">
					<p className="font-bold md:text-[35px] ss:text-[20px] my-8 break-normal text-center">
						Nigerian Content Development Policy
					</p>
					<section className="text-justify text-[18px] pb-4">
						<p>
							It is the policy of{" "}
							<strong>B.ENSMART TECHNICAL COMPANY LTD</strong> to carry out the
							execution of any project in such a way as to comply with the
							Federal Government LAW (NOGICD Act) of{" "}
							<strong>B.ENSMART TECHNICAL COMPANY LTD</strong> undertakes to
							comply by insuring that optimal amount of works is carried out in
							Nigeria and good considerations are given to the following, among
							others:
							{showContentPolicy ? (
								<>
									<li>
										Quality and quantity of committed infrastructure in Nigeria.
									</li>
									<li>
										Location of Project management Team and Procurement centre
										in Nigeria; (section @, NOGICD Act).
									</li>
									<li>
										Direct Nigerian employment (Skilled, unskilled, managerial
										and directorship); in order to comply with section 28 of
										NOGICD Act,
									</li>
									<li>
										Giving First Consideration to services, raw materials and
										finished goods that are of Nigerian origin; this is in
										conformity or compliance with section 12 of NOGICD Act.{" "}
									</li>
									<li> Nigerian equipment and other resources;</li>
									<li>
										Training, technology acquisition, development programs and
										other opportunities for Nigerians; this is in conformity
										with section 29 of NOGICD Act.{" "}
									</li>
									<li>
										Substantial Nigeria participation and First consideration in
										the procurement of Nigerian manufactured goods.{" "}
									</li>
								</>
              ) : null}
              						</p>

							<button
								onClick={toggleShowContentPolicy}
								className="text-blue-500 font-bold"
							>
								{showContentPolicy ? "See Less" : "See More"}
							</button>
					</section>
				</div>
			</div>
		</>
	);
};

export default About;
