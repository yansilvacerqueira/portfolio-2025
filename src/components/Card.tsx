import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface CardProps {
  className?: string
  children: ReactNode
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={
        twMerge(`
        bg-gray-500/20
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
          p-6
          `,
          className
        )
      }
    >
      {children}
    </div>
  )
}