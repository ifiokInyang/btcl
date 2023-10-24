import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Announcement = () => {
	return (
		<div className="flex items-center flex-wrap px-4 py-4 bg-[#33008b]">
			<div className="flex flex-wrap flex-1 justify-center mt-2">
				<div className="inline-flex items-center ss:font-medium lg:font-bold px-8">
					{" "}
					<BsFillTelephoneFill color="white" />
					<p className="ml-2 text-white">+234 807 031 6182</p>
				</div>
				<div className="flex align-center ss:font-medium lg:font-bold items-center">
					<MdEmail color="white" />
					<p className="ml-2 text-white">info@bensmartech.com</p>
				</div>
			</div>
		</div>
	);
};

export default Announcement;
