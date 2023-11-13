import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/bensmartLogo.jpeg";
import Modal from "../Modal/Modal";

const Navbar = () => {
	const [showModal, setShowModal] = React.useState(false);

	const navigate = useNavigate();

	const handleOpen = () => {
		setShowModal(true);
	};

	const wellheadFunc = () => {
		localStorage.removeItem("man");
		localStorage.removeItem("pipeline");
		localStorage.removeItem("flood");
		navigate("/services");
	};
	const pipelineFunc = () => {
		localStorage.setItem("pipeline", "pipeline");
		navigate("/services");
	};
	const manPowerFunc = () => {
		localStorage.setItem("man", "man");
		navigate("/services");
	};
	const floodControlFunc = () => {
		localStorage.setItem("flood", "flood");
		navigate("/services");
	};
	const whoWeAre = () => {
		localStorage.removeItem("vision");
		localStorage.removeItem("mission");
		navigate("/about");
	};

	const missionClick = () => {
		localStorage.setItem("mission", "mission");
		navigate("/about");
	};

	const visionClick = () => {
		localStorage.setItem("vision", "vision");
		navigate("/about");
	};
	return (
    <div className="">
      <nav className="bg-white xlg:pr-4 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between">
          <Link
            to={'/'}
            className="flex flex-1 items-start flex-col ss:h-[110px] md:h-auto"
          >
            <img
              src={logo}
              className="xlg2:mr-[400px] xlg:mr-[200px] lg:mr-0 md:mr-0 ss:mt-[8px] md:mt-0 ss:w-[50px] md:w-[100px] ss:h-[50px] md:h-[100px]"
              alt="bensmartech Logo"
              width="100px"
            />
            <p className="md:ml-[12px] ss:ml-[6px]">
              <span className="text-[#33008b] md:text-[20px] ss:text-[15px] font-medium">
                B.Ensmart
              </span>{' '}
            </p>
            <p className="md:ml-[12px] ss:ml-[6px]">
              <span className="text-[#ff2c2c] md:text-[20px] ss:text-[15px] font-medium">
                Technical Company Ltd.
              </span>
            </p>
            {/* <span className="self-center lg:text-xl sm:text-base font-semibold whitespace-nowrap dark:text-white"></span> */}
          </Link>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-[black] rounded-lg md:hidden hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="ss:w-10 sm:w-7 ss:h-10 sm:h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleOpen}
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <Modal showModal={showModal} setShowModal={setShowModal} />

          <div className="md:flex flex-col ss:hidden p-4 md:p-0 mt-4 font-medium md:flex-row sm:space-x-4 lg:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <div>
              <Link
                to={'/'}
                className="block py-2 pl-3 pr-4 lg:text-xl sm:text-base sm:text-base rounded md:bg-transparent md:hover:text-[#33008b] md:text-[black] hover:-translate-x-1 ease-in-out md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </div>
            <div className="group relative cursor-pointer">
              <Link
                to={'/about'}
                className="menu-hover flex py-2 pl-3 pr-4 lg:text-xl sm:text-base rounded hover:text-black md:hover:bg-transparent hover:-translate-x-1 ease-in-out md:hover:text-[#33008b] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About{' '}
                <svg
                  className="w-3.5 h-2.5 ml-2.5 mt-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
              <div className="invisible absolute z-50 flex w-[120px] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li
                    className="my-2 block border-b border-gray-100 py-1 hover:text-black md:mx-0"
                    onClick={whoWeAre}
                  >
                    Who we are
                  </li>{' '}
                  <li
                    className="cursor:pointer block py-2 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={missionClick}
                  >
                    Mission
                  </li>{' '}
                  <li
                    className="cursor:pointer block py-2 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={visionClick}
                  >
                    Vision{' '}
                  </li>{' '}
                </ul>
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <Link
                to="/services"
                className="menu-hover flex py-2 pl-3 pr-4 lg:text-xl sm:text-base rounded hover:text-black md:hover:bg-transparent hover:-translate-x-1 ease-in-out md:hover:text-[#33008b] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services{' '}
                <svg
                  className="w-3.5 h-2.5 ml-2.5 mt-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
              <div className="invisible absolute z-50 flex w-[180px] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li
                    className="block py-2 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={wellheadFunc}
                  >
                    • Wellhead protection system{' '}
                  </li>
                  <li
                    className="block py-2 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={pipelineFunc}
                  >
                    • Pipeline protection system{' '}
                  </li>
                  <li
                    className="block py-2 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={floodControlFunc}
                  >
                    • Flood and erosion control system{' '}
                  </li>
                  <li
                    className="block py-2 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={manPowerFunc}
                  >
                    • Manpower supply
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Link
                to={'/projects'}
                className="block py-2 pl-3 pr-4 lg:text-xl sm:text-base rounded hover:text-black hover:-translate-x-1 ease-in-out md:hover:bg-transparent md:hover:text-[#33008b] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </Link>
            </div>
            <div>
              <Link
                to={'/contact'}
                className="block py-2 pl-3 pr-4 md:mr-8 lg:mr-0 lg:text-xl sm:text-base rounded hover:text-black md:hover:bg-transparent hover:-translate-x-1 ease-in-out md:hover:text-[#33008b] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
