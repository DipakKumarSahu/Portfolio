import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="relative py-24 px-[6vw] md:px-[10vw] lg:px-[15vw] font-sans bg-gradient-to-br from-black via-[#0f0f1a] to-purple-800 overflow-hidden"
  >
    {/* Background Blobs */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-purple-700 via-indigo-500 to-transparent opacity-20 animate-pulse blur-3xl top-[-100px] left-[-150px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-pink-600 via-purple-500 to-transparent opacity-20 animate-pulse blur-2xl top-[-100px] right-[-150px]"></div>
    </div>

    {/* Title */}
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
        MY SKILLS
      </h2>
      {/* <div className="w-68 h-1 mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div> */}
      <div className="w-64 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      <p className="text-gray-400 mt-6 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
        A showcase of my technical stack, tools, and technologies I’ve mastered
      </p>
    </div>

    {/* Skill Cards */}
    <div className="relative z-10 flex flex-wrap justify-center gap-8">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareEnable={true}
          glareMaxOpacity={0.1}
          className="w-full sm:w-[48%] lg:w-[30%]"
        >
          <div className="bg-[#1b1b2c]/70 border border-gray-700 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg relative group hover:shadow-[0_0_30px_3px_rgba(130,69,236,0.4)] transition-all duration-300 min-h-[400px] flex flex-col justify-between">
            <div>
              <h3 className="text-center text-xl sm:text-2xl font-bold text-purple-400 mb-6 tracking-wide uppercase">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center bg-[#1f1f33] border border-[#2c2c44] hover:border-purple-500 rounded-xl p-3 sm:p-4 transition-all duration-300 shadow-md hover:scale-105"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
                    />
                    <span className="text-sm sm:text-base text-gray-300 font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
