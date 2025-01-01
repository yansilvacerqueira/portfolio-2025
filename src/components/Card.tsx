import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div
      className="
      bg-gray-500/20
        px-8
        pt-8
      text-white
        rounded-3xl
        relative
        overflow-hidden
        z-0
        after:z-10
        after:content-['']
        after:absolute
        after:inset-0
        after:outline-2
        after:outline
        after:-outline-offset-2
        after:rounded-3xl
      after:outline-black/10
        after:pointer-events-none
        md:px-10
        md:pt-10
        lg:pt-16
        lg:px-20
      "
    >
      {children}
    </div>
  )
}