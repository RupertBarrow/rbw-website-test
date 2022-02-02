import { NumberOptions } from '/1/module/esm/0/l/en-US/mi/lightning%2FinternationalizationLibrary%23number%2FnumberOptions%2Fv%2F1_14_2-alpha/latest/lightning_internationalizationLibrary_number_numberOptions.js';
import { getNumberFormat } from '/1/module/esm/0/l/en-US/mi/lightning%2FinternationalizationLibrary%23localizationService%2Fv%2F1_14_2-alpha/latest/lightning_internationalizationLibrary_localizationService.js';
export function numberFormatFallback(options) {
  const skeleton = new NumberOptions(options).getSkeleton();
  return {
    format: value => {
      return getNumberFormat(skeleton).format(value);
    }
  };
}