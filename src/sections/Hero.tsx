import Image from 'next/image';

import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt='computer-image' />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 ">
            <div className="bg-green-500 size-2.5 rounded-full" />
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>

        <h1 className="font-serif text-3xl text-center mt-8">Building Execeptional User Experiences</h1>

        <p>
          I specialize in transforming designs into functional,
          high-perfoming web applications.
          Let's discuss your next project.
        </p>

        <div>
          <button>
            <span>Explore my work</span>
            <ArrowDown />
          </button>

          <button>
            <span>👋</span>
            <span>Let's Connect</span>
          </button>
        </div>

      </div>
    </div>
  );
};
