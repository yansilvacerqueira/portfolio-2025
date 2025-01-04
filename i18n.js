import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from './public/locales/en/common.json';
import commonPt from './public/locales/br/common.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    lng: 'en',
    resources: {
      en: {
        common: commonEn,
      },
      pt: {
        common: commonPt,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
