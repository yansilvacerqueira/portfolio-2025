import Image from "next/image";
import { useTranslation } from "react-i18next";

import robertoImg from "@/assets/images/robertoImg.jpeg";
import caduImg from "@/assets/images/caduImg.jpeg";
import arthurImg from "@/assets/images/arthurImg.jpeg";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

export const TestimonialsSection = () => {
  const { t } = useTranslation('common')

  const testimonials = [
    {
      name: "Roberto teixeira",
      position: "Software Engineer FullStack @Congenial",
      text: t('feedback.roberto'),
      avatar: robertoImg,
    },
    {
      name: "Eduardo Amorim",
      position: "Software Engineer FullStack @Congenial",
      text: t('feedback.cadu'),
      avatar: caduImg,
    },
    {
      name: "Arthur Rios",
      position: "FrontEnd Developer @Incript",
      text: t('feedback.arthur'),
      avatar: arthurImg,
    },
  ];

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          firstText={t('about.testimonials.growth')}
          title={t('about.testimonials.title')}
          description={t('about.testimonials.subtitle')}
        />

        <div className="mt-10 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8 animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {testimonials.map((testiomonial, index) => (
              <Card key={index} className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
                <div className="flex items-center gap-4">
                  <Image src={testiomonial.avatar} alt={testiomonial.name} className="size-16 flex-shrink-0 rounded-full" />

                  <div className="flex flex-col">
                    <p className="text-black font-semibold">{testiomonial.name}</p>
                    <p className="text-sm text-black/60">{testiomonial.position}</p>
                  </div>
                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">{testiomonial.text}</p>
              </Card>
            ))}

            {testimonials.map((testiomonial, index) => (
              <Card key={index} className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
                <div className="flex items-center gap-4">
                  <Image src={testiomonial.avatar} alt={testiomonial.name} className="size-16 flex-shrink-0 rounded-full" />

                  <div className="flex flex-col">
                    <p className="text-black font-semibold">{testiomonial.name}</p>
                    <p className="text-sm text-black/60">{testiomonial.position}</p>
                  </div>
                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">{testiomonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
