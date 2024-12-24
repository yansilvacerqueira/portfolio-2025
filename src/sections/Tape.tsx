import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
]

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip">
      <div className="bg-black -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word, index) => (
              <div key={index} className="inline-flex items-center gap-4 text-white">
                <span className="uppercase font-extrabold text-sm">{word}</span>

                <StarIcon className="size-6 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
