import { useState, useEffect } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (scrollPosition > offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-3 left-0 right-0 flex justify-center items-center z-50">
      <nav className="flex gap-1 p-0.5 border border-black/5 bg-black/10 backdrop-blur rounded-full relative">
        <div
          className="absolute inset-0.5 bg-white rounded-full transition-all duration-300 ease-out"
          style={{
            width: '25%',
            transform: `translateX(${activeSection === 'home' ? '0%' :
              activeSection === 'projects' ? '100%' :
                activeSection === 'about' ? '200%' : '295%'
              })`
          }}
        />

        <a
          onClick={() => scrollToSection('home')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'home' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            }`}
        >
          Home
        </a>
        <a
          onClick={() => scrollToSection('projects')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'projects' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            }`}
        >
          Projects
        </a>
        <a
          onClick={() => scrollToSection('about')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'about' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            }`}
        >
          About
        </a>
        <a
          onClick={() => scrollToSection('contact')}
          className={`nav-item relative z-10 transition-colors duration-300 ${activeSection === 'contact' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};