import React from "react";
import { FaAndroid } from "react-icons/fa";

const ProjectsCard = ({ title, des, appUrl, appUrl1 }) => {
  const desLines = des.split("\n").filter((line) => line.trim() !== "");

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg"></div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {/* <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
  </span> */}
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <FaAndroid />
                </a>
              </span>
              {appUrl1 ? (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a href={appUrl1} target="_blank" rel="noopener noreferrer">
                    <FaAndroid />
                  </a>
                </span>
              ) : null}
            </div>
          </div>
          {/* Render each line of des as a bullet point */}
          <div className="mt-3">
            <ul className="list-disc list-inside">
              {desLines.map((line, index) => (
                <li key={index} className="text-sm tracking-wide text-gray-300">
                  {line.trim()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
