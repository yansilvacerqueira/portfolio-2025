interface SectionHeaderProps {
  firstText: string
  title: string
  description: string
}

export const SectionHeader = ({ firstText, title, description }: SectionHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-emerald-500">
          {firstText}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-gray-400 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  )
}