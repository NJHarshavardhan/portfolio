import React from "react";

const Skills = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Programming Languages
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <SkillCard skill="Dart" icon="🎯" level="Intermediate" />
          <SkillCard skill="Node.js" icon="🚀" level="Advanced" />
          <SkillCard skill="PHP" icon="💻" level="Intermediate" />
          <SkillCard skill="HTML" icon="🌐" level="Advanced" />
          <SkillCard skill="CSS" icon="🎨" level="Intermediate" />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frameworks and Libraries
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <SkillCard skill="Flutter" icon="📱" level="Expert" />
          <SkillCard skill="Express" icon="🌐" level="Advanced" />
          <SkillCard skill="React" icon="⚛️" level="Expert" />
          <SkillCard skill="Remix" icon="🔁" level="Intermediate" />
          <SkillCard skill="Bootstrap" icon="🅱️" level="Intermediate" />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Platforms and Tools
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <SkillCard skill="Shopify" icon="🛒" level="Intermediate" />
          <SkillCard skill="AWS Lambda" icon="☁️" level="Advanced" />
          <SkillCard skill="Serverless (SLS)" icon="🚀" level="Intermediate" />
          <SkillCard skill="Firebase" icon="🔥" level="Intermediate" />
          <SkillCard skill="GitHub" icon="🐙" level="Advanced" />
          <SkillCard skill="GitLab" icon="🦊" level="Intermediate" />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Databases</h2>
          <br/>
        </div>
        <div className="flex flex-col gap-4">
          <SkillCard skill="MySQL" icon="🐬" level="Advanced" />
          <SkillCard skill="MongoDB" icon="🍃" level="Intermediate" />
          <SkillCard skill="Supabase" icon="🔍" level="Intermediate" />
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill, icon, level }) => {
  return (
    <div className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex shadow-shadowOne text-sm font-medium">
      <div className="flex items-center gap-4">
    {/*    <span className="text-3xl">{icon}</span> */}
        <div>
          <p className="text-sm uppercase font-medium">{skill}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
