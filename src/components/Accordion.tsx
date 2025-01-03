'use client'
import React, { ReactNode, useState } from 'react';

interface AccordionItemProps {
  title: string
  children: ReactNode
  open?: boolean
}

const AccordionItem = ({ title, children, open = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-all duration-200"
      >
        <span className="text-sm font-medium text-gray-900">{title}</span>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>

        </div>
      </button>
      <div
        className={`
          grid
          transition-all
          duration-200
          ease-in-out
          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-4 text-sm text-gray-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Accordion = () => {
  return (
    <div className="w-full max-w-md  rounded-lg shadow-sm overflow-hidden">
      <AccordionItem title="Are you available to hire full time?" open>
        At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But I feel lucky and, like most people, I'm always open to hearing about new challenges and other fun stuff.
      </AccordionItem>

      <AccordionItem title="How do your quote pricing works and when can we get on call?" open>
        Pricing depends on project complexity and timeline. Let's schedule a call to discuss details.
      </AccordionItem>

      <AccordionItem title="Can you facelift my design?">
        Yes! I can help modernize and improve your design while maintaining your brand identity.
      </AccordionItem>
    </div>
  );
};
