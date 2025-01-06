'use client'
import { motion } from "framer-motion"

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import StarIcon from "@/assets/icons/star.svg"

import TsIcon from "@/assets/icons/typescript.svg"
import JsIcon from "@/assets/icons/square-js.svg"
import AwsIcon from "@/assets/icons/aws.svg"
import GoIcon from "@/assets/icons/golang.svg"
import ReactIcon from "@/assets/icons/react.svg"
import PyIcon from "@/assets/icons/python.svg"
import NextIcon from "@/assets/icons/nextjs.svg"

import hackerRank from "@/assets/images/hackeranck.png"
import evento from "@/assets/images/evento.jpeg"
import myPicture from "@/assets/images/me.jpg"

import { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const toolBoxItems = [
  {
    title: 'TypeScript',
    icon: TsIcon
  },
  {
    title: 'JavaScript',
    icon: JsIcon
  },
  {
    title: 'GoLang',
    icon: GoIcon
  },
  {
    title: 'AWS',
    icon: AwsIcon
  },
  {
    title: 'Python',
    icon: PyIcon
  },
  {
    title: 'React',
    icon: ReactIcon
  },
  {
    title: 'NextJS',
    icon: NextIcon
  },
  {
    title: 'ReactNative',
    icon: ReactIcon
  },
]

const toolBoxItems2 = [

  {
    title: 'React',
    icon: ReactIcon
  },
  {
    title: 'NextJS',
    icon: NextIcon
  },
  {
    title: 'ReactNative',
    icon: ReactIcon
  },
  {
    title: 'TypeScript',
    icon: TsIcon
  },
  {
    title: 'JavaScript',
    icon: JsIcon
  },
  {
    title: 'GoLang',
    icon: GoIcon
  },
  {
    title: 'AWS',
    icon: AwsIcon
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)
  const { t } = useTranslation('common')

  const hobbies = [
    {
      title: t('hobbies.painting'),
      emoji: '🎨',
      left: '5%',
      top: '5%'
    },
    {
      title: t('hobbies.cooking'),
      emoji: '🍳',
      left: '50%',
      top: '5%'
    },
    {
      title: t('hobbies.classical'),
      emoji: '🎶',
      left: '10%',
      top: '35%'
    },
    {
      title: 'Crypto',
      emoji: '🪙',
      left: '35%',
      top: '40%'
    },
    {
      title: t('hobbies.reading'),
      emoji: '📚',
      left: '70%',
      top: '45%'
    },
    {
      title: t('hobbies.projects'),
      emoji: '👩‍💻',
      left: '5%',
      top: '65%'
    },
    {
      title: t('hobbies.gym'),
      emoji: '🏋',
      left: '45%',
      top: '70%'
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container">
        <SectionHeader
          firstText={t('about.world.aboutMe')}
          title={t('about.world.title')}
          description={t('about.world.subtitle')}
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center gap-2">
                  <StarIcon className="size-9 text-black" />

                  <h3 className="font-serif text-3xl text-black">{t('about.sections.hello')}</h3>
                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">{t('about.sections.hey')}</p>

                <div className="relative mt-4">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-pink-50  to-blue-50 opacity-60 blur transition duration-300 group-hover:opacity-70" />

                  <Image src={myPicture} alt="HackerRank Certificate" className="relative aspect-square w-full rounded-xl object-cover transition duration-300 hover:scale-[1.02]" />
                </div>
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <div>
                <div className="flex items-center gap-2">
                  <StarIcon className="size-9 text-black" />
                  <h3 className="font-serif text-3xl text-black">{t('about.sections.toolbox')}</h3>
                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">{t('about.sections.toolboxExplore')}</p>
              </div>

              <div className="py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex flex-none gap-2 animate-move-left [animation-duration:10s]">
                  {toolBoxItems.map((v, i) => (
                    <div key={i} className="inline-flex items-center gap-4 py-2 px-3 bg-black rounded-lg">
                      <v.icon className="size-9" />

                      <p className="text-white font-semibold">{v.title}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-none gap-2 animate-move-right [animation-duration:10s]">
                  {toolBoxItems2.map((v, i) => (
                    <div key={i} className="inline-flex items-center gap-4 py-2 px-3 bg-black rounded-lg">
                      <v.icon className="size-9" />

                      <p className="text-white font-semibold">{v.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3" ref={constraintRef}>
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <div>
                <div className="flex items-center gap-2">
                  <StarIcon className="size-9 text-black" />

                  <div>

                  <h3 className="font-serif text-3xl text-black">{t('about.sections.beyond')}</h3>
                  <span className="text-black/60 mt-5 text-sm md:text-base">{t("about.sections.dragItems")}</span>
                  </div>

                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">{t('about.sections.beyondExplore')}</p>
              </div>

              <div className="mt-6 relative flex-1">
                {hobbies.map((hobby, i) => (
                  <motion.div
                    key={i}
                    className="inline-flex gap-2 px-6 py-1.5 items-center bg-black rounded-full absolute hover:cursor-pointer"
                    style={{
                      left: hobby.left,
                      top: hobby.top
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <p className="text-white font-semibold">{hobby.title}</p>

                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[350px] md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center gap-2">
                  <StarIcon className="size-9 text-black" />

                  <h3 className="font-serif text-3xl text-black">{t('about.sections.achievements')}</h3>
                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">{t('about.sections.someAchievements')}</p>

                <div className="relative mt-5 w-full">

                  <div className="absolute left-20 top-6 transition-transform duration-300 hover:-translate-y-2">
                    <Image src={evento} alt="event" className="rounded-xl" />
                  </div>

                  <div className="absolute right-20 top-0 transition-transform duration-300 hover:-translate-y-2">
                    <Image src={hackerRank} alt="HackerRank Certificate" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

