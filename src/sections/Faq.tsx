import { Accordion } from "@/components/Accordion"
import { useTranslation } from "react-i18next";

export const FaqSection = () => {
  const { t } = useTranslation('common')

  const handleEmailClick = () => {
    window.location.href = 'mailto:yansilvacerqueira@outlook.com';
  };

  return (
    <section id="contact" className=" pb-16 lg:py-24">
      <div className="container">
        <p className="uppercase font-semibold  tracking-widest bg-gradient-to-r from-gray-600 to-gray-800  text-transparent bg-clip-text text-center">
          {t('faq.doubts')}
        </p>

        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          {t('faq.title')}
        </h2>

        <p className="text-center text-gray-500 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          {t('faq.subtitle')}
        </p>

        <div className="flex justify-center mt-10">
          <Accordion />
        </div>

        <div className="flex justify-center mt-20">
          <button onClick={handleEmailClick} className='inline-flex items-center justify-center  gap-2  bg-black  text-white  px-6 h-12 rounded-xl hover:animate-button-hover'>
            <span className='animate-hand-wave'>👋</span>

            <span className="font-semibold">{t('hero.cta.connect')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
