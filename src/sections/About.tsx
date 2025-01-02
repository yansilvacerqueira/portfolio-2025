import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"

const toolBoxItems = [
  {
    title: 'TypeScript',
    icon: ''
  },
  {
    title: 'JavaScript',
    icon: ''
  },
  {
    title: 'GoLang',
    icon: ''
  },
  {
    title: 'AWS',
    icon: ''
  },
  {
    title: 'Python',
    icon: ''
  },
  {
    title: 'React',
    icon: ''
  },
  {
    title: 'NextJS',
    icon: ''
  },
  {
    title: 'ReactNative',
    icon: ''
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%'
  },
  {
    title: 'Cooking',
    emoji: '🍳',
    left: '50%',
    top: '5%'
  },
  {
    title: 'Listening Classical Music',
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
    title: 'Reading',
    emoji: '📚',
    left: '70%',
    top: '45%'
  },
  {
    title: 'New projects',
    emoji: '👩‍💻',
    left: '5%',
    top: '65%'
  },
  {
    title: 'Gym',
    emoji: '🏋',
    left: '45%',
    top: '70%'
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          firstText="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am and what i do"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center gap-2">
                  <StarIcon className="size-9 text-black" />
                  <h3 className="font-serif text-3xl text-black">My Reads</h3>
                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">Explore the books shaping my perspectives.</p>
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <div>
                <div className="flex items-center gap-2">
                  <StarIcon className="size-9 text-black" />
                  <h3 className="font-serif text-3xl text-black">My Tool Box</h3>
                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">Explore the technologies and tools i use to create a good digital experiences.</p>
              </div>

              <div className="flex py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex flex-none gap-6">
                  {toolBoxItems.map((v, i) => (
                    <div key={i} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-black/20 rounded-lg">
                      <span>icon</span>
                      <p className="text-black/60 font-semibold">{v.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className=" flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <div>
                <div className="flex items-center gap-2">
                  <StarIcon className="size-9 text-black" />
                  <h3 className="font-serif text-3xl text-black">Beyond The Code</h3>
                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">Explore my interests and hobbies beyond the digital world.</p>
              </div>

              <div className="mt-6 relative flex-1">
                {hobbies.map((hobby, i) => (
                  <div
                    key={i}
                    className="inline-flex gap-2 px-6 py-1.5 items-center bg-black rounded-full absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top
                    }}
                  >
                    <p className="text-white font-semibold">{hobby.title}</p>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center gap-2">
                  <StarIcon className="size-9 text-black" />
                  <h3 className="font-serif text-3xl text-black">My Reads</h3>
                </div>

                <p className="text-black/60 mt-5 text-sm md:text-base">Explore the books shaping my perspectives.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
