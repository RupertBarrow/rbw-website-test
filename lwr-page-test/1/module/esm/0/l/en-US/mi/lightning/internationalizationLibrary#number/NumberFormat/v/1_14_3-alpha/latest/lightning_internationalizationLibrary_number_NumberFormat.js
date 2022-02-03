import { numberFormatFallback } from '/1/module/esm/0/l/en-US/mi/lightning/internationalizationLibrary#number/numberFormatFallback/v/1_14_3-alpha/latest/lightning_internationalizationLibrary_number_numberFormatFallback.js';
import { normalizeOptions, exceedsSafeLength, getFromCache } from '/1/module/esm/0/l/en-US/mi/lightning/internationalizationLibrary#number/utils/v/1_14_3-alpha/latest/lightning_internationalizationLibrary_number_utils.js';
export function numberFormat(options) {
  const normalizedOpts = Object.assign({}, normalizeOptions(options));

  if (!('Intl' in window)) {
    return numberFormatFallback(normalizedOpts);
  }

  return {
    format: value => {
      if (value && exceedsSafeLength(value)) {
        return numberFormatFallback(normalizedOpts).format(value);
      }

      const numberFormatInstance = getFromCache(normalizedOpts);
      return numberFormatInstance.format(value);
    }
  };
}