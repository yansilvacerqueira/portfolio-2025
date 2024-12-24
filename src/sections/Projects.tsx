import Image from "next/image";

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const projects = [
  {
    company: "Congenial",
    year: "2023",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Incript",
    year: "2024",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Kouloo",
    year: "2024",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="mt-48 pb-16 lg:py-24">
      <div className="container">
        <p className="uppercase font-semibold  tracking-widest bg-gradient-to-r from-gray-600 to-gray-800  text-transparent bg-clip-text text-center">
          Real World Results
        </p>

        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>

        <p className="text-center text-gray-500 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>


        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
            bg-gray-500/20
              px-8
              pt-8
              text-white
              rounded-3xl
              relative
              z-0
              overflow-hidden
              after:z-10
              after:content-['']
              after:absolute
              after:inset-0
              after:outline-2
              after:outline
              after:-outline-offset-2
              after:rounded-3xl
              after:outline-black/10
              after:pointer-events-none
              md:px-10
              md:pt-10
              lg:pt-16
              lg:px-20
            "
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="uppercase gap-2 inline-flex font-semibold text-sm  tracking-widest bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-black mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-black/20 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base">
                        <span className="inline-flex gap-2 text-black/50">
                          <CheckIcon className="size-5 md:size-6" />
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link} >
                    <button className="gap-2 bg-black text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center mt-8 md:w-auto px-8">
                      <span>Visit Live Site</span>

                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
