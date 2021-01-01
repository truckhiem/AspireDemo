import I18n from 'react-native-i18n';
import en from './en';
import vi from './vi';

I18n.fallbacks = true;

I18n.translations = {
  en: en,
  vi: vi,
};

export const switchLanguage = (lang, component) => {
  I18n.locale = lang;
  I18n.defaultLocale = lang;
};

export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
