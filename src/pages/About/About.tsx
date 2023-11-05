import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/about-us.png";
import rig from "../../assets/rig1.jpeg";
import { TbTargetArrow } from "react-icons/tb";
import { IoTelescopeSharp } from "react-icons/io5";

const About = () => {
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
        </div>
        <div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
          <img
            src={rig}
            className="h-auto md:max-w-md ss:max-w-ss rounded-lg"
            // width={"200px"}
            alt="three pipelines in a forest area"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center bg-[#fafbfc] space-x-8 h-auto mt-8 py-8">
        <div
          className="flex flex-col md:pl-8 ss:pl-2 justify-center h-[600px] text-white md:w-[400px] ss:w-[300px] bg-[black] rounded-lg font-bold"
          style={{ boxShadow: '4px 1px 15px red' }}
        >
          <p className="text-[24px] font-medium">Why we are the best...</p>

          <p className="text-[30px]">Bensmartech Vision &amp; Mission</p>
        </div>
        <div className="lg:w-[50vw] ss:w-full space-y-16">
          <div id="mission" className="ss:mt-8 md:mt-0">
            <TbTargetArrow size={40} color="#33008b" />
            <p className="text-[34px] mt-4 font-bold">Our Mission</p>
            <p className="md:text-[20px] ss:text-[15px]">
              Become the nucleus of the security service delivery through
              commitment, diligence and innovative ideas. Helping Companies meet
              their operations targets and on schedule.
            </p>
          </div>
          <div id="vision">
            <IoTelescopeSharp size={40} color="#33008b" />
            <p className="text-[34px] mt-4 font-bold">Our Vision</p>
            <p className="md:text-[20px] ss:text-[15px]">
              To be every industry’s Point of Reference in the protection of all
              industrial assets/facilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
