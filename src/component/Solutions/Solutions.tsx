import React from "react";
import { useNavigate } from "react-router-dom";
import wellHead from "../../assets/wellhead2.jpeg";
import erosion from "../../assets/erosion4.jpg";
import pipeline from "../../assets/pipeline3.webp";
import manPower from "../../assets/manpower1.png";


const Solutions = () => {
	const navigate = useNavigate();

	return (
		<div className="px-8 bg-[#f3f2f5] pb-8">
			<h5 className="sm:pt-4 ss:pt-10 text-4xl mb-8 font-bold text-center tracking-tight text-gray-900 dark:text-white">
				Our Solutions{" "}
			</h5>
			<div className="flex flex-wrap justify-evenly mb-8">
				<div className="max-w-lg ss:mb-8 xlg2:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<a href="#">
						<img
							className="rounded-t-lg w-full md:h-[285px] ss:h-[190px]"
							src={wellHead}
							alt="well head"
						/>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Well head Protection System
							</h5>
						</a>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Elevate the security of your wellhead infrastructure with our
							cutting-edge surveillance system. Our solution provides advanced
							monitoring and control to ensure the safety and integrity of your
							oil and gas operations, protecting against unauthorized access and
							security breaches.
						</p>
					</div>
				</div>
				<div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<a href="#">
						<img
							className="rounded-t-lg w-full md:h-[285px] ss:h-[190px]"
							src={pipeline}
							alt="pipeline protection"
						/>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Pipeline Protection System
							</h5>
						</a>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Ensure the safety and reliability of your pipeline network with
							our state-of-the-art security and surveillance system. We employ
							advanced technology for continuous monitoring, helping to
							safeguard against security threats, unauthorized access, and
							operational disruptions.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap justify-evenly">
				<div className="max-w-lg ss:mb-8 xlg2:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<a href="#">
						<img
							className="rounded-t-lg w-full md:h-[285px] ss:h-[190px]"
							src={erosion}
							alt="erosion"
						/>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Flood and Erosion Control System
							</h5>
						</a>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Shield communities and critical infrastructure from the
							devastating effects of floods and erosion with our comprehensive
							control system. Our solutions, including flood barriers and
							erosion-resistant measures, provide proactive protection against
							natural disasters.
						</p>
					</div>
				</div>
				<div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<a href="#">
						<img
							className="rounded-t-lg w-full md:h-[285px] ss:h-[190px]"
							src={manPower}
							alt="man-power"
						/>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Manpower Supply
							</h5>
						</a>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Access a skilled and adaptable workforce through our manpower
							supply services. We deliver proficient personnel across various
							industries to meet your operational demands and enhance
							productivity.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solutions;
