import React from "react";

const projects = [
  {
    title: "Contact Manager",
    description:
      "Spring Boot + MySQL + Tailwind project to manage contacts with auth and birthday reminders. 📍Note: This project is still under development and not yet hosted on GitHub. ",
    image: "public/assets/Project Image/ContactManager/image.png",
    link: "Private",
    tech: [
      "Spring Boot",
      "JPA",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "Thymeleaf",
      "HTML",
      "Figma",
      "OAuth2",
      "Cloudinary",
      "Mailtrap",
    ],
  },
  {
    title: "Weather App",
    description:
      "Stay updated with live weather forecasts using this sleek and easy-to-use weather app. Just enter your city and get instant weather details.",
    image: "public/assets/Project Image/Climate/climatesc.JPG",
    link: "https://github.com/DipakKumarSahu/Weather-Web-App/tree/main",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "Servlet",
      "JSP",
      "OpenWeather API",
      "Figma",
    ],
  },
  {
    title: "FinTrust Bank",
    description:
      "FinTrust Bank is a secure and user-friendly banking management system. It allows users to manage accounts, transfer funds, and track transactions with ease.",
    image: "public/assets/Project Image/Bank/home1.JPG",
    link: "https://github.com/DipakKumarSahu/BankManagement",
    tech: [
      "Java",
      "Servlet",
      "JSP",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
    ],
  },
  {
    title: "Electronic Shop",
    description:
      "A modern e-commerce app for gadgets with secure backend, real-time product updates and Stripe payment.",
    image: "public/assets/Project Image/Electronic/paymentgateway.JPG",
    link: "https://github.com/DipakKumarSahu/Electronic-Shop",
    tech: ["Spring Boot", "JavaScript", "Stripe API", "HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-[6vw] md:px-[10vw] lg:px-[15vw] font-sans bg-gradient-to-bl from-[#1a0f22] via-[#0f0f1a] to-black overflow-hidden"
    >
      {/* Background Glow - Top Right for symmetry with Skills Section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-purple-700 via-indigo-500 to-transparent opacity-20 blur-3xl top-[-100px] right-[-150px] animate-pulse"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
          Featured Projects
        </h2>
        {/* <div className="w-28 h-1 mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div> */}
        <div className="w-109 h-1 bg-[#8245ec] mx-auto mt-3"></div>
        <p className="text-gray-400 mt-6 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
          A showcase of my real-world, full-stack projects built with modern
          technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-[#333344] bg-white/5 shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_5px_rgba(180,90,255,0.25)] hover:scale-[1.02] hover:border-purple-500 overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-purple-400 uppercase tracking-wide">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md border border-white/20 bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-blue-400 hover:text-pink-400 transition"
                >
                  🚀 View on GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
