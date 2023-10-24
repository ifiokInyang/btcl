import React, { useEffect } from 'react';
import erosionTwo from '../../assets/erosion3.jpg';
import wellhead from '../../assets/wellhead.jpeg';
import pipeline1 from '../../assets/pipelines1.jpeg';
import manPower from '../../assets/manpower2.webp';

const Slider = () => {
  useEffect(() => {
    console.log('Slider is running');
  });

  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-[40rem]">
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={wellhead}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="a wellhead infrastructure"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-start justify-center">
              <p className="text-white md:text-[40px] ss:text-[20px] font-bold md:pl-[8rem] ss:pl-[0.5rem] md:mb-[4rem] ss:mb-[0.5rem]">
                Wellhead protection surveillance system
              </p>
              <p className="text-white md:text-[25px] ss:text-[10px] font-bold md:pl-[8rem] ss:pl-[0.5rem]">
                "We Guard Every Drop with our Cutting-Edge <br /> Wellhead
                Protection Surveillance, <br /> Ensuring Security, and Business
                Profitability."{' '}
              </p>
            </div>
          </div>
          <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src={pipeline1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="3 pipelines along a desert area"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-start justify-center">
              <p className="text-white md:text-[40px] ss:text-[20px] font-bold md:pl-[8rem] ss:pl-[0.5rem] md:mb-[4rem] ss:mb-[0.5rem]">
                Pipeline protection surveillance system
              </p>
              <p className="text-white md:text-[25px] ss:text-[10px] font-bold md:pl-[8rem] ss:pl-[0.5rem]">
                "Our Proven Pipeline Security System
                <br /> guarantees Safety, Sustainability, and <br />{' '}
                Uninterrupted Operations."{' '}
              </p>
            </div>
          </div>
          <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img
              src={manPower}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="technical personnels on duty"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-start justify-center">
              <p className="text-white md:text-[40px] ss:text-[20px] font-bold md:pl-[8rem] ss:pl-[0.5rem] md:mb-[4rem] ss:mb-[0.5rem]">
                Manpower Supply
              </p>
              <p className="text-white md:text-[25px] ss:text-[10px] font-bold md:pl-[8rem] ss:pl-[0.5rem]">
                "We supply competent personnels <br /> to manage the
                surveillance systems,
                <br /> giving you confidence and peace of mind.
              </p>
            </div>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={erosionTwo}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="erosion effect"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-start justify-center">
              <p className="text-white md:text-[40px] ss:text-[20px] font-bold md:pl-[8rem] ss:pl-[0.5rem] md:mb-[4rem] ss:mb-[0.5rem]">
                Flood and erosion-control system
              </p>
              <p className="text-white md:text-[25px] ss:text-[10px] font-bold md:pl-[8rem] ss:pl-[0.5rem]">
                "Our Innovative Flood and Erosion-Control <br /> System
                Preserves Landscapes, Nature <br /> and portrays Environmental
                Stewardship."{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
