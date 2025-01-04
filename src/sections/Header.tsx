import { useState, useEffect } from 'react';
import { Globe } from "lucide-react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const getTranslateX = () => {
    const sections = ['home', 'projects', 'about'];
    return `${sections.indexOf(activeSection) * 100}%`;
  };


  return (
    <div className="fixed top-3 left-0 right-0 flex justify-center items-center z-50">
      <nav className="flex gap-1 p-0.5 border border-black/5 bg-black/10 backdrop-blur rounded-full relative">
        <div
          className="absolute inset-0.5 bg-white rounded-full transition-transform duration-300 ease-out"
          style={{
            width: '33%',
            transform: `translateX(${getTranslateX()})`,
          }}
        />

        <a
          onClick={() => scrollToSection('home')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'home' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
        >
          Home
        </a>

        <a
          onClick={() => scrollToSection('projects')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'projects' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
        >
          Projects
        </a>

        <a
          onClick={() => scrollToSection('about')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'about' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
        >
          About
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
