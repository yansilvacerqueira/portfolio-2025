'use client'
import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('common')

  return (
    <div className="w-full max-w-md rounded-lg border border-gray-200  shadow-sm overflow-hidden">
      <AccordionItem title={t('faq.questions.fulltime.question')} open>
        {t('faq.questions.fulltime.answer')}
      </AccordionItem>

      <AccordionItem title={t('faq.questions.pricing.question')} open>
        {t('faq.questions.pricing.answer')}
      </AccordionItem>

      <AccordionItem title={t('faq.questions.tech.question')} open>
        {t('faq.questions.tech.answer')}
      </AccordionItem>

      <AccordionItem title={t('faq.questions.project.question')}>
        {t('faq.questions.project.answer')}

      </AccordionItem>

      <AccordionItem title={t('faq.questions.tools.question')}>
        {t('faq.questions.tools.answer')}
      </AccordionItem>
    </div>
  );
};
