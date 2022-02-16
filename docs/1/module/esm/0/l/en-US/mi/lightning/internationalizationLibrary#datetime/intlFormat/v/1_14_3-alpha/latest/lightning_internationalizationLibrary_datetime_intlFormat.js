import locale from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Fi18n%2Flocale%2Fv%2F1_14_3-alpha/latest/@salesforce_i18n_locale.js';
import { DateTimeOptions } from '/1/module/esm/0/l/en-US/mi/lightning%2FinternationalizationLibrary%23datetime%2FdateTimeOptions%2Fv%2F1_14_3-alpha/latest/lightning_internationalizationLibrary_datetime_dateTimeOptions.js';
import { formatDateUTC, formatDate, toOtherCalendar, syncUTCToWallTime } from '/1/module/esm/0/l/en-US/mi/lightning%2FinternationalizationLibrary%23localizationService%2Fv%2F1_14_3-alpha/latest/lightning_internationalizationLibrary_localizationService.js';
import { isValidISODateTimeString, TIME_SEPARATOR } from '/1/module/esm/0/l/en-US/mi/lightning%2Fiso8601Utils%2Fv%2F1_14_3-alpha/latest/lightning_iso8601Utils.js';
const dateTimeFormatInstancesCache = {};
const POSSIBLE_OPTS = {
  weekday: true,
  era: true,
  year: true,
  month: true,
  day: true,
  hour: true,
  minute: true,
  second: true,
  timeZone: true,
  timeZoneName: true,
  hour12: true
};

function getOptionsUniqueKey(options) {
  return Object.keys(options).sort().reduce((prev, optionName) => {
    if (POSSIBLE_OPTS[optionName]) {
      return prev + optionName + options[optionName] + '';
    }

    return prev;
  }, '');
}

function getFromCache(options) {
  const optionsUniqueKey = getOptionsUniqueKey(options);
  let formatInstance = dateTimeFormatInstancesCache[optionsUniqueKey];

  if (!formatInstance) {
    formatInstance = new Intl.DateTimeFormat(locale, options);
    dateTimeFormatInstancesCache[optionsUniqueKey] = formatInstance;
  }

  return formatInstance;
}

function convertAndFormatDate(date, format, timeZone) {
  const translatedDate = toOtherCalendar(date);
  const converted = syncUTCToWallTime(translatedDate, timeZone);
  return formatDateUTC(converted, format);
}

function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime());
}

function toDate(value) {
  let dateObj = value;

  if (!isDate(value) && (typeof value === 'string' || typeof value === 'number')) {
    dateObj = new Date(isFinite(value) ? parseInt(value, 10) : Date.parse(value));
  }

  return dateObj;
}

const isTimeZonesSupported = function () {
  try {
    // IE11 only supports the UTC time zone and throws when given anything else
    // eslint-disable-next-line new-cap
    Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles'
    });
  } catch (err) {
    return false;
  }

  return true;
}();

function dateTimeFormatFallback(dto) {
  // localization service will default to mediumDateFormat when no format is provided
  const format = dto.hasFormattingOptions() ? dto.getSkeleton() : null;
  const {
    timeZone
  } = dto.options;
  return {
    format: value => {
      // if value is an ISO date string (e.g. 2019-10-25), do not convert between timezones and just format the date
      if (isValidISODateTimeString(value) && value.indexOf(TIME_SEPARATOR) < 0) {
        return formatDate(value);
      } // FIXME use standard methods from localizationService for parsing and formatting instead


      const dateObj = toDate(value);

      if (isDate(dateObj)) {
        if (timeZone === 'UTC') {
          dateObj.setTime(dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000);
        }

        return convertAndFormatDate(dateObj, format, timeZone);
      }

      return '';
    }
  };
}

export function dateTimeFormat(opts) {
  const options = opts || {};
  const dto = new DateTimeOptions(options);

  if (!('Intl' in window) || !dto.hasFormattingOptions() || !isTimeZonesSupported) {
    return dateTimeFormatFallback(dto);
  }

  return {
    format: value => {
      const dtf = getFromCache(options);
      return dtf.format(toDate(value));
    }
  };
}