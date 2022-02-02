import { normalizeString } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_2-alpha/latest/lightning_utilsPrivate.js';
export const VARIANT = {
  STANDARD: 'standard',
  LABEL_HIDDEN: 'label-hidden',
  LABEL_STACKED: 'label-stacked',
  LABEL_INLINE: 'label-inline'
};
/**
A variant normalization utility for attributes.
@param {Any} value - The value to normalize.
@return {Boolean} - The normalized value.
**/

export function normalizeVariant(value) {
  return normalizeString(value, {
    fallbackValue: VARIANT.STANDARD,
    validValues: [VARIANT.STANDARD, VARIANT.LABEL_HIDDEN, VARIANT.LABEL_STACKED, VARIANT.LABEL_INLINE]
  });
}