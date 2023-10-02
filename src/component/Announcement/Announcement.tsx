import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Announcement = () => {

	return (
    <div
      className="flex items-center flex-wrap px-4 py-4 bg-[#CBC3E3]"
    >
      <div className="flex flex-wrap flex-1 justify-center mt-2">
        <div className="inline-flex items-center font-bold px-8">
          {' '}
          <BsFillTelephoneFill />
          <p className="ml-2">+234 807 031 6182</p>
        </div>
        <div className="flex align-center font-bold items-center">
          <MdEmail />
          <p className="ml-2">info@bensmartech.com</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
