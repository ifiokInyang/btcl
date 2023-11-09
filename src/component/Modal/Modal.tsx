import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModalProps } from "../../utils/interfaces";

export default function Modal({ showModal, setShowModal }: ModalProps) {
	const navigate = useNavigate();

	const servicesFunc = () => {
		localStorage.removeItem("man");
		localStorage.removeItem("pipeline");
		localStorage.removeItem("flood");
		setShowModal(false);
		navigate("/services");
	};

	return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto ss:pt-[102px] fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 ml-auto md:max-w-[400px] sm:max-w-[300px] ss:max-w-[250px]">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#33008b] outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t hover:bg-[#5614c7]">
                  <Link to={'/'} onClick={() => setShowModal(false)}>
                    <h3 className="text-xl font-medium text-white">Home</h3>
                  </Link>

                  <button
                    className="ml-auto bg-transparent border-0 text-black opacity-1 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-1 text-[40px] block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t hover:bg-[#5614c7]">
                  <Link to={'/about'} onClick={() => setShowModal(false)}>
                    <h3 className="text-xl font-medium text-white hover:text-black">
                      About
                    </h3>
                  </Link>
                </div>
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t hover:bg-[#5614c7]">
                  <Link to={'/services'} onClick={servicesFunc}>
                    <h3 className="text-xl font-medium text-white hover:text-black">
                      Services
                    </h3>
                  </Link>
                </div>
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t hover:bg-[#5614c7]">
                  <Link to={'/projects'} onClick={() => setShowModal(false)}>
                    <h3 className="text-xl font-medium text-white hover:text-black">
                      Projects
                    </h3>
                  </Link>
                </div>
                <div className="flex items-start justify-between p-5 rounded-t hover:bg-[#5614c7]">
                  <Link to={'/contact'} onClick={() => setShowModal(false)}>
                    <h3 className="text-xl font-medium text-white hover:text-black">
                      Contact
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
