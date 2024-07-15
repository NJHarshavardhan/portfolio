import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="HYRA"
          des={`Developed a responsive user interface for a vacation rental
          Experience booking platform, optimized for Android & iOS.
          Utilized Riverpod for efficient state management.
          Leveraged real-time Firebase database and Google Analytics for performance tracking.
          Integrated login features for Google, Facebook, Apple, and Naver.`}
          appUrl={'https://play.google.com/store/apps/details?id=com.cron24.hyra&hl=en-IN'}
        />
        <ProjectsCard
          title="CABBY Uber Clone Script"
          des={`Created an Uber clone script with separate apps for Rider and Driver.
          Implemented background service for seamless app operation.
          Added Wallet and Payout Methods for financial transactions.
          Integrated Geo Locator for real-time user location tracking.
          Incorporated multiple user locale translation files for localized`}
          appUrl={'https://play.google.com/store/apps/details?id=com.cron24.cabby&hl=en&gl=US'}
          appUrl1={'https://play.google.com/store/apps/details?id=com.cron24.cabbydriver&hl=en&gl=US'}
        />
      </div>
    </section>
  );
};

export default Projects;
