import React from "react";
import { Link } from "react-router-dom";
import services from "../../assets/services.jpg";
import ids from "../../assets/idsMain.jpeg";
import idsOne from "../../assets/ids1.jpeg";
import floodImg from "../../assets/f&e_nobg.png";
import sokuProject from "../../assets/sokuProject.png"


const Services = () => {
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
            Bensmartech Limited is a leading innovator and provider of
            cutting-edge protection and surveillance solutions, specializing in
            safeguarding critical infrastructure in the Oil and Gas Industry.
            With our patented technologies, we've established a solid track
            record in the industry, offering a comprehensive range of services
            that encompass well head protection, pipeline surveillance, flood
            and erosion control systems, and expert workforce provisioning.
          </p>
          <p className="md:text-[20px] ss:text-[15px] my-8 font-normal text-justify">
            Committed to unwavering infrastructure safety and reliability, we
            specialize in state-of-the-art technology for asset protection and
            monitoring. Our experienced team excels in tailoring holistic
            solutions to exceed client needs, with global recognition from
            top-tier IOCs through strategic partnerships.
          </p>
        </div>
        <div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
          <img
            src={ids}
            className="h-[500px] md:max-w-md ss:max-w-ss rounded-lg object-contain"
            width={'300px'}
            alt="caged wellhead in a surveillance protection"
          />
        </div>
      </div>{' '}
      <div className="flex flex-wrap ss:my-[4rem] ss:pr-4 xlg:pr-[76px] px-4 w-full">
        <div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
          <img
            src={idsOne}
            className="h-[500px] md:max-w-md ss:max-w-ss rounded-lg object-contain"
            // width={"600px"}
            alt="three pipelines in a forest area"
          />
        </div>
        <div className="md:w-[50%] ss:w-full mr-0">
          <p className="font-bold md:text-[35px] ss:text-[20px] break-normal">
            Pipeline Protection System
          </p>
          <p className="md:text-[20px] ss:text-[15px] my-8 font-normal text-justify">
            Bensmartech Limited is a leading innovator and provider of
            cutting-edge protection and surveillance solutions, specializing in
            safeguarding critical infrastructure in the Oil and Gas Industry.
            With our patented technologies, we've established a solid track
            record in the industry, offering a comprehensive range of services
            that encompass well head protection, pipeline surveillance, flood
            and erosion control systems, and expert workforce provisioning.
          </p>
          <p className="md:text-[20px] ss:text-[15px] my-8 font-normal  text-justify">
            Committed to unwavering infrastructure safety and reliability, we
            specialize in state-of-the-art technology for asset protection and
            monitoring. Our experienced team excels in tailoring holistic
            solutions to exceed client needs, with global recognition from
            top-tier IOCs through strategic partnerships.
          </p>
        </div>
      </div>{' '}
      <div className="flex flex-wrap ss:my-[4rem] ss:pl-4 xlg:pl-[76px] px-4 w-full">
        <div className="md:w-[50%] ss:w-full mr-0">
          <p className="font-bold md:text-[35px] ss:text-[20px] break-normal">
            Flood and Erosion Control System
          </p>
          <p className="md:text-[20px] ss:text-[15px] my-8 font-normal text-justify">
            Bensmartech Limited is a leading innovator and provider of
            cutting-edge protection and surveillance solutions, specializing in
            safeguarding critical infrastructure in the Oil and Gas Industry.
            With our patented technologies, we've established a solid track
            record in the industry, offering a comprehensive range of services
            that encompass well head protection, pipeline surveillance, flood
            and erosion control systems, and expert workforce provisioning.
          </p>
          <p className="md:text-[20px] ss:text-[15px] my-8 font-normal text-justify">
            Committed to unwavering infrastructure safety and reliability, we
            specialize in state-of-the-art technology for asset protection and
            monitoring. Our experienced team excels in tailoring holistic
            solutions to exceed client needs, with global recognition from
            top-tier IOCs through strategic partnerships.
          </p>
        </div>
        <div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
          <img
            src={floodImg}
            className="h-auto md:max-w-md ss:max-w-ss rounded-lg"
            // width={"200px"}
            alt="three pipelines in a forest area"
          />
        </div>
      </div>{' '}
      <div className="flex flex-wrap ss:my-[4rem] ss:pr-4 xlg:pr-[76px] px-4 w-full">
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
            Bensmartech Limited is a leading innovator and provider of
            cutting-edge protection and surveillance solutions, specializing in
            safeguarding critical infrastructure in the Oil and Gas Industry.
            With our patented technologies, we've established a solid track
            record in the industry, offering a comprehensive range of services
            that encompass well head protection, pipeline surveillance, flood
            and erosion control systems, and expert workforce provisioning.
          </p>
          <p className="md:text-[20px] ss:text-[15px] my-8 font-normal text-justify">
            Committed to unwavering infrastructure safety and reliability, we
            specialize in state-of-the-art technology for asset protection and
            monitoring. Our experienced team excels in tailoring holistic
            solutions to exceed client needs, with global recognition from
            top-tier IOCs through strategic partnerships.
          </p>
        </div>
      </div>{' '}
    </div>
  );
};

export default Services;
