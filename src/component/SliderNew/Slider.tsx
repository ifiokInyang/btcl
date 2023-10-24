import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import erosionTwo from "../../assets/erosion3.jpg";
import wellhead from "../../assets/wellhead.jpeg";
import pipeline1 from "../../assets/pipelines1.jpeg";
import manPower from "../../assets/manpower2.webp";

function SliderNew() {
	const slides = [
		{
			url: wellhead,
			caption: "Wellhead protection surveillance system",
			desc: "We Guard Every Drop with our Cutting-Edge Wellhead Protection Surveillance, Ensuring Security, and Business Profitability",
		},
		{
			url: pipeline1,
			caption: "Pipeline protection surveillance system",
			desc: "Our Proven Pipeline Security System guarantees Safety, Sustainability, and Uninterrupted Operations.",
		},
		{
			url: manPower,
			caption: "Manpower Supply",
			desc: "We supply competent personnels to manage the surveillance systems, giving you confidence and peace of mind.",
		},

		{
			url: erosionTwo,
			caption: "Flood and erosion-control system",
			desc: "Our Innovative Flood and Erosion-Control System Preserves Landscapes, Nature and portrays Environmental Stewardship",
		},
	];

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000); // 10 seconds
		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
    <div className="md:h-[1080px] ss:h-[700px] w-full m-auto relative group z-1">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-start justify-center">
          <p className="text-white md:text-[40px] ss:text-[20px] font-bold md:pl-[8rem] ss:pl-[0.5rem] md:mb-[4rem] ss:mb-[0.5rem]">
            {slides[currentIndex].caption}
          </p>
          <p className="text-white w-[50%] md:text-[25px] ss:text-[10px] font-bold md:pl-[8rem] ss:pl-[0.5rem]">
            {slides[currentIndex].desc}
          </p>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderNew;
