import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          firstText="Happy clients"
          title="What clients Say About Me"
          description="Don't just take my word for it. See What my clients have to say
        about my work."
        />

        <div className="mt-10 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8">
            {testimonials.map((testiomonial, index) => (
              <Card key={index} className="max-w-xs md:max-w-md md:p-8">
                <div className="flex items-center gap-4">
                  <div className="bg-black/30 rounded-full size-16 flex-shrink-0">
                    <Image src={testiomonial.avatar} alt={testiomonial.name} />
                  </div>

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
