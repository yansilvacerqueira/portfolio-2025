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
        <span className="text-sm font-serif text-gray-900">{title}</span>
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
    <div className="w-full max-w-md rounded-lg border border-gray-200  shadow-sm overflow-hidden">
      <AccordionItem title="Are you available to hire full time?" open>
        Absolutely! I'm actively seeking full-time positions where I can contribute my full-stack development expertise.
        I'm passionate about building scalable solutions and ready to join a team where I can make a meaningful impact.
      </AccordionItem>

      <AccordionItem title="How do your quote pricing works and when can we get on call?" open>
        Pricing depends on project complexity and timeline. Let's schedule a call to discuss details.
      </AccordionItem>

      <AccordionItem title="What technologies do you specialize in??" open>
        I specialize in modern web development with React.js, React Native, TypeScript, and Node.js.
        I have extensive experience with both frontend and backend development, including work with PHP/Yii, MySQL, and cloud services.
      </AccordionItem>

      <AccordionItem title="How do you approach new projects???">
        I start by thoroughly understanding the project requirements and business goals.
        My approach focuses on writing clean, maintainable code while ensuring optimal performance and user experience.
        I've successfully led projects that improved system performance by up to 30%.
      </AccordionItem>

      <AccordionItem title='Do you have experience with project management tools?'>
        Yes! I'm proficient with Jira, Git, and other collaborative tools.
        I have experience leading team presentations and mentoring junior developers, ensuring smooth project delivery and knowledge sharing.
      </AccordionItem>
    </div>
  );
};
