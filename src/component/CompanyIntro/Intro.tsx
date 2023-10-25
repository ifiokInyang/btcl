import React from "react";
import { Link } from "react-router-dom";
import introImg from "../../assets/pipeline2.jpg"

const Intro = () => {
	return (
    <div className="flex flex-wrap md:my-[8rem] ss:my-[4rem] px-4 w-full">
      <div className="md:w-[50%] ss:w-full mr-0">
        <p className="font-bold md:text-[35px] ss:text-[20px] break-normal">
          Securing assets, promoting wealth and sustainability
        </p>
        <p className="md:text-[25px] ss:text-[15px] my-8 font-medium tracking-wider">
          At the forefront of industry transformation, we specialize in
          providing world-class remote surveillance service for offshore/onshore
          assets and environmental sustainability. We envision a future where
          robust Wellhead and Pipeline Surveillance Systems, dedicated Manpower
          Services, and cutting-edge Erosion Control Solutions converge for the
          protection of well engineering assets, business sustainability, and
          climate change mitigation.
        </p>
        <button
          type="button"
          className="text-white bg-[#33008b] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link to={'/about'}>
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
      <div className="flex justify-center mt-4 md:w-[50%] ss:w-full">
        <img
          src={introImg}
          className="h-auto md:max-w-md ss:max-w-ss rounded-lg"
          // width={"200px"}
          alt="three pipelines in a forest area"
        />
      </div>
    </div>
  );
};

export default Intro;
