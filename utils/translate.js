import I18n from 'i18n-js';
import en from '../translations/en';
import tr from '../translations/tr';

I18n.fallbacks = true;
I18n.missingBehaviour = 'guess';
I18n.defaultLocale = 'en';
I18n.locale = 'en';

I18n.translations = {
  tr,
  en,
};

export const setLocale = (locale) => {
  I18n.locale = locale;
};

export default I18n.translate.bind(I18n);
