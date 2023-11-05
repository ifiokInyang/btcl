import React from "react";
import projectImg from "../../assets/projects.jpeg";
import sokuImg from "../../assets/sokuProject.png";
import placeHolder from "../../assets/placeholderImg.png";
import idsImg from "../../assets/ids1.jpeg";
import idsImg1 from "../../assets/platform1.png";
import idsImg2 from "../../assets/idsMain.jpeg";
import idsImg3 from "../../assets/rig1.jpeg";
import idsImg4 from "../../assets/onshore1.png";
import idsImg5 from "../../assets/onshore2.png";
import idsImg6 from "../../assets/onshore3.png";
import idsImg7 from "../../assets/onshore4.png";
import idsImg8 from "../../assets/onshore5.png";
import idsImg9 from "../../assets/onshore6.png";

const Projects = () => {
	return (
    <>
      <div className="relative">
        <img
          src={projectImg}
          alt="projects cover image"
          className="md:h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl md:text-[100px] font-bold">
          Projects
        </div>
      </div>

      <div className="px-8 bg-[#f3f2f5] pb-8">
        <h5 className="sm:pt-8 ss:pt-10 md:text-4xl ss:text-xl mb-8 font-bold text-center tracking-tight text-gray-900 dark:text-white">
          Completed/Ongoing Projects{' '}
        </h5>
        <div className="flex flex-wrap justify-evenly mb-8">
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full md:h-[205px] ss:h-[190px] object-cover"
                src={sokuImg}
                alt="men installing IDS at Soku well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Soku Oil Field, Rivers, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={idsImg}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Asset monitoring device installation for wellhead protection at
                <strong> Excravos, Delta, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={idsImg1}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Otumara, Delta, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full md:h-[205px] ss:h-[190px] object-cover"
                src={idsImg2}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Afremo, Delta, Nigeria</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={idsImg3}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Ogbotogbo, Bayelsa, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={idsImg4}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Etelebou, Bayelsa, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={idsImg5}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Gbaran, Bayelsa, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={idsImg6}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Agbada, Rivers, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={idsImg7}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Oyigbo, Rivers, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={idsImg8}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at{' '}
                <strong> North/South Bank, Niger Delta Region, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={idsImg9}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Adibawa, Bayelsa, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={placeHolder}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Uguta, Imo, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={placeHolder}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Obele, Imo, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={placeHolder}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong>Ubie/Ahia, Niger Delta Region, Nigeria.</strong>
              </p>
            </div>
          </div>
          <div className="max-w-[280px] ss:mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover md:h-[205px] ss:h-[190px]"
                src={placeHolder}
                alt="well head"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-justify">
                Installation of asset monitoring device for wellhead protection
                at <strong> Imo River, Abia, Nigeria.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
