import salesforceLocale from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Fi18n%2Flocale%2Fv%2F1_14_3-alpha/latest/@salesforce_i18n_locale.js';
import salesforceLanguage from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Fi18n%2Flang%2Fv%2F1_14_3-alpha/latest/@salesforce_i18n_lang.js'; // Month and weekdays names should be based on the user's language setting.
// Falling back to the user's locale or the default 'en-us' in case the tag isn't supported by the browser's Intl implementation

const FALLBACK_LOCALES = [salesforceLocale, 'en-us'];
const symbolsCache = {}; // languageOverride is only used in the tests

export function getNameOfWeekdays(languageOverride) {
  const language = languageOverride || salesforceLanguage;
  const languageDataCache = symbolsCache[language];

  if (languageDataCache && languageDataCache.weekdays) {
    return languageDataCache.weekdays;
  }

  const intlLocales = [language, ...FALLBACK_LOCALES];
  const fullNameFormatter = new Intl.DateTimeFormat(intlLocales, {
    weekday: 'long',
    timeZone: 'UTC'
  });
  const shortNameFormatter = new Intl.DateTimeFormat(intlLocales, {
    weekday: 'short',
    timeZone: 'UTC'
  });
  const weekdays = [];

  for (let i = 0; i <= 6; i++) {
    // (1970, 0, 4) corresponds to a sunday.
    const date = new Date(Date.UTC(1970, 0, 4 + i));
    weekdays.push({
      fullName: format(fullNameFormatter, date),
      shortName: format(shortNameFormatter, date)
    });
  }

  if (!symbolsCache[language]) {
    symbolsCache[language] = {};
  }

  symbolsCache[language].weekdays = weekdays;
  return weekdays;
} // languageOverride is only used in the tests

export function getMonthNames(languageOverride) {
  const language = languageOverride || salesforceLanguage;
  const languageDataCache = symbolsCache[language];

  if (languageDataCache && languageDataCache.months) {
    return languageDataCache.months;
  }

  const intlLocales = [language, ...FALLBACK_LOCALES];
  const monthNameFormatter = new Intl.DateTimeFormat(intlLocales, {
    month: 'long'
  });
  const months = [];

  for (let i = 0; i <= 11; i++) {
    const date = new Date(1970, i, 4);
    months.push({
      // we currently only need the fullName
      fullName: format(monthNameFormatter, date)
    });
  }

  if (!symbolsCache[language]) {
    symbolsCache[language] = {};
  }

  symbolsCache[language].months = months;
  return months;
}

function format(dateTimeFormat, date) {
  const formattedDate = dateTimeFormat.format(date);
  return removeIE11Markers(formattedDate);
}

function removeIE11Markers(formattedString) {
  // IE11 adds LTR / RTL mark in the formatted date time string
  return formattedString.replace(/[\u200E\u200F]/g, '');
}