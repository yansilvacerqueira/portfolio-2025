import { useState } from 'react';
import { Globe } from "lucide-react";

import { useTranslation } from 'next-i18next'
import i18n from 'i18next';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState(i18n.language || 'en');

  const { t } = useTranslation('common')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });

      setActiveSection(sectionId);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="fixed top-3 left-0 right-0 flex justify-center items-center z-50">
      <nav className="flex gap-1 p-0.5 border border-black/5 bg-black/10 backdrop-blur rounded-full relative">

        <a
          onClick={() => scrollToSection('home')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'home' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
        >
          {t('nav.home')}
        </a>

        <a
          onClick={() => scrollToSection('projects')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'projects' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
        >
          {t('nav.projects')}
        </a>

        <a
          onClick={() => scrollToSection('about')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'about' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
        >
          {t('nav.about')}
        </a>
      </nav>

      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 py-1 rounded-full bg-black hover:bg-black/50 transition-colors ml-2"
      >
        <Globe size={16} className='text-white' />
        <span className="text-sm font-medium text-white">
          {language.toUpperCase()}
        </span>
      </button>
    </div>
  );
};
