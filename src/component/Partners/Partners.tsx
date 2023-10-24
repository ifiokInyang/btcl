import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import partnerOne from "../../assets/shell.png";
import partnerTwo from "../../assets/heirs.png";
import partnerThree from "../../assets/sahara.png";
import partnerFour from "../../assets/newcross.png";

import PartnerVariant from "../FramerMotion/Framer";

const Partners = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
	});

	const message =
		"Our synergy of success lies in our partnerships with top brands to meet their needs.";

	useEffect(() => {
		if (inView) {
			// Perform any actions when the element comes into view
			// console.log("it is in view");
		}
	}, [inView]);

	return (
		<div className="px-12 py-8">
			<div>
				<h1 className="lg:text-[44px] font-bold text-center mb-4">
					Trusted by well known companies
				</h1>
				<motion.h4
					className="text-center"
					variants={PartnerVariant.typingContainer}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				>
					{Array.from(message).map((word, i) => (
						<motion.span
							className="text-center lg:text-[24px] font-medium"
							key={i}
							variants={PartnerVariant.typingText}
						>
							{word}
						</motion.span>
					))}
				</motion.h4>
			</div>
			<div
				className="flex flex-wrap justify-around align-center my-12 ss:h-auto"
				ref={ref}
			>
				<motion.img
					src={partnerOne}
					alt="shell-petroleum-development-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgOne}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerTwo}
					alt="heirs-holdings-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgTwo}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerThree}
					alt="sahara-energies-resources-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgThree}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerFour}
					alt="newcross-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgFour}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
			</div>
		</div>
	);
};

export default Partners;
