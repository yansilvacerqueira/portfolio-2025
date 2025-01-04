import ArrowDown from '@/assets/icons/arrow-down.svg'
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation('common')


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:yansilvacerqueira@outlook.com';
  };

  return (
    <div id="home" className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">
      <div className="size-[620px] hero-ring animate-pulse-ring-1" />
      <div className="size-[820px] hero-ring animate-pulse-ring-2" />
      <div className="size-[1020px] hero-ring animate-pulse-ring-3" />
      <div className="size-[1220px] hero-ring animate-pulse-ring-4" />

      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 mt-8 rounded-md">
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-status-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full opacity-50 blur-sm animate-status-pulse" />
            </div>
            <div className="text-sm font-medium text-white">{t('hero.status')}</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            {t('hero.title')}
          </h1>

          <p className="mt-4 text-center text-gray-500 md:text-lg">
            {t('hero.description')}</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center  items-center mt-8 gap-4 relative'>
          <button className='inline-flex items-center gap-2 border border-black/15 px-6 h-12 rounded-xl hover:animate-button-hover' onClick={() => scrollToSection("projects")}>
            <span className="font-semibold">{t('hero.cta.explore')}</span>

            <ArrowDown className="size-4" />
          </button>

          <button onClick={handleEmailClick} className='inline-flex items-center gap-2  bg-black  text-white  px-6 h-12 rounded-xl hover:animate-button-hover'>
            <span className='animate-hand-wave'>👋</span>

            <span className="font-semibold">{t('hero.cta.connect')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
