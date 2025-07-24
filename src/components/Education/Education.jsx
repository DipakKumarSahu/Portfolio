import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-28 px-6 sm:px-12 md:px-[10vw] bg-skills-gradient font-sans relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">EDUCATION</h2>
        <div className="w-75 h-1 bg-[#8245ec] mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
          A timeline showcasing my academic milestones and qualifications.
        </p>
      </div>

      {/* Education Cards - No Timeline, Clean Vertical Layout */}
      <div className="relative z-10 grid gap-12 md:grid-cols-1">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-white/10 backdrop-blur-md border border-purple-500 text-white rounded-2xl shadow-lg hover:shadow-purple-700 transition duration-300 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6"
          >
            <div className="w-20 h-20 rounded-xl bg-white overflow-hidden border border-purple-500 shrink-0">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-sm text-gray-300">{edu.school}</p>
              <p className="text-xs text-purple-300 mt-1">{edu.date}</p>

              <p className="text-sm text-gray-400 font-medium mt-3 mb-1">
                Grade: <span className="font-bold text-white">{edu.grade}</span>
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
