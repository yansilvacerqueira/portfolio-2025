import Image from "next/image";

import congenial from "@/assets/images/congenial.png";
import kouloo from "@/assets/images/kouloo.png";
import incript from "@/assets/images/incript.png";

import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { useTranslation } from "react-i18next";



export const ProjectsSection = () => {
  const { t } = useTranslation('common')

  const projects: any[] = [
    {
      company: "Incript",
      year: t('projects.items.dmv.date'),
      title: t('projects.items.dmv.title'),
      results: t('projects.items.dmv.results', { returnObjects: true }),
      link: "https://www.incript.com.br",
      image: incript,
    },
    {
      company: "Kouloo",
      year: t('projects.items.childcare.date'),
      title: t('projects.items.childcare.title'),
      results: t('projects.items.childcare.results', { returnObjects: true }),
      link: "https://kouloo.com",
      image: kouloo,
    },
    {
      company: "Congenial",
      year: t('projects.items.lms.date'),
      title: t('projects.items.lms.title'),
      results: t('projects.items.lms.results', { returnObjects: true }),
      link: "https://app.congenial.com.br",
      image: congenial,
    },
  ];

  return (
    <section id="projects" className="mt-48 pb-16 lg:py-24">
      <div className="container">
        <p className="uppercase font-semibold  tracking-widest bg-gradient-to-r from-gray-600 to-gray-800  text-transparent bg-clip-text text-center">
          {t('projects.title1')}
        </p>

        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          {t('projects.title')}
        </h2>

        <p className="text-center text-gray-500 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          {t('projects.subtitle')}
        </p>


        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="
                md:px-10
                md:pt-10
                lg:pt-16
                lg:px-20
                px-8
                pt-8
                pb-0
                sticky
                top-20
                "
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="uppercase gap-2 inline-flex font-semibold text-sm tracking-widest bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-black mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-black/20 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result: any, index: any) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base">
                        <span className="inline-flex gap-2 text-black/50">
                          <CheckIcon className="size-5 md:size-6" />
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link} target="_blank" className="gap-2 bg-black text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center mt-8 md:w-auto px-8 hover:animate-button-hover" >
                    <span>{t('buttons.visitSite')}</span>

                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>

                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
