import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 lg:w-[600px] lg:border-l-[6px] lg:border-l-black lg:border-opacity-30 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 rounded-lg">
          <ResumeCard
            title="Software Engineer"
            subTitle="BINARYCHAKRA - (Oct 2023 - Present)"
            result="Madurai"
            des="Developed and optimized Shopify applications using React, Node.js, Polaris, and Remix, enhancing user engagement and performance. Built cross-platform Mac applications with Flutter to streamline development and maintenance. Applied prompt engineering and AI Models, techniques like cosine similarity to generate high-quality blogs and images, improving content relevance and user experience."
          />
          <ResumeCard
            title="Mobile App Developer"
            subTitle="CRON24 TECHNOLOGIES - (Mar 2022 – Sept 2023)"
            result="Madurai"
            des={`Designed and built state management systems for Android and iOS apps, ensuring smooth and reliable functionality. Developed mobile applications using Flutter, integrating APIs for features like Google Maps, Stripe payments, Firebase notifications, and Google Analytics. Translated detailed Figma designs into responsive Flutter UIs and managed multilingual translations to support users worldwide`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
