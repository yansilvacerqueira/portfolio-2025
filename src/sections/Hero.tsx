import Image from 'next/image';

import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">

      <div className="size-[620px] hero-ring animate-pulse-ring-1" />
      <div className="size-[820px] hero-ring animate-pulse-ring-2" />
      <div className="size-[1020px] hero-ring animate-pulse-ring-3" />
      <div className="size-[1220px] hero-ring animate-pulse-ring-4" />

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt='computer-image' />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 mt-8 rounded-md">
            <div className="bg-green-500 size-2.5 rounded-full" />
            <div className="text-sm font-medium text-white">Available for new projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Execeptional User Experiences
          </h1>

          <p className="mt-4 text-center text-gray-500 md:text-lg">
            I specialize in transforming designs into functional,
            high-perfoming web applications.
            Let's discuss your next project.
          </p>

        </div>

        <div className='flex flex-col md:flex-row justify-center  items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-black/15 px-6 h-12 rounded-xl'>
            <span className="font-semibold" >Explore my work</span>

            <ArrowDown className="size-4" />
          </button>

          <button className='inline-flex items-center gap-2  bg-black  text-white  px-6 h-12 rounded-xl'>
            <span>👋</span>

            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
