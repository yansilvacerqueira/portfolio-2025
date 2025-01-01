interface SectionHeaderProps {
  firstText: string
  title: string
  description: string
}

export const SectionHeader = ({ firstText, title, description }: SectionHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text">
          {firstText}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-gray-500 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  )
}