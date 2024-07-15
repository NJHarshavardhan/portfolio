import React from 'react'
//import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaLaptop } from "react-icons/fa";
//import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Flutter App Development"
          des="Architected efficient state management systems for mobile applications, supporting both Android and iOS platforms."
          icon={<FaMobile />}
        />
        
        <Card
          title="Flutter MacOS Development"
          des="Specialized in creating Flutter applications specifically for macOS."
          icon={<FaLaptop />}
        />
        <Card
          title="Web Development"
          des="Engineered and executed Shopify applications using React, Node.js, Shopify Polaris, and Firestore."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features