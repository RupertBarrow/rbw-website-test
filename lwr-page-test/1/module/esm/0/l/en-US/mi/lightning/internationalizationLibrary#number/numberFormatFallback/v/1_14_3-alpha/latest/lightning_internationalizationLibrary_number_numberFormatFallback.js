import { NumberOptions } from '/1/module/esm/0/l/en-US/mi/lightning/internationalizationLibrary#number/numberOptions/v/1_14_3-alpha/latest/lightning_internationalizationLibrary_number_numberOptions.js';
import { getNumberFormat } from '/1/module/esm/0/l/en-US/mi/lightning/internationalizationLibrary#localizationService/v/1_14_3-alpha/latest/lightning_internationalizationLibrary_localizationService.js';
export function numberFormatFallback(options) {
  const skeleton = new NumberOptions(options).getSkeleton();
  return {
    format: value => {
      return getNumberFormat(skeleton).format(value);
    }
  };
}