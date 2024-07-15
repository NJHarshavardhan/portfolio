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
        <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="BINARYCHAKRA - (Oct 2023 - Present)"
            result="Madurai"
            des="Engineered and executed Shopify applications using React, Node.js, Shopify Polaris, and Firestore. Optimized code deployment processes using AWS Lambda and the Serverless Framework."
          />
          <ResumeCard
            title="Mobile App Developer"
            subTitle="CRON24 TECHNOLOGIES - (Mar 2022 – Sept 2023)"
            result="Madurai"
            des={`Architected efficient state management systems for mobile applications.
            Built and maintained mobile applications using Dart, Flutter, APIs, and JSON`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
