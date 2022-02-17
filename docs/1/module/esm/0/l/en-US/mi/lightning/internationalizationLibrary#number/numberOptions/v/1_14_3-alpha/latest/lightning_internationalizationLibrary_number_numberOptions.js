import numberFormat from '/1/module/esm/0/l/en-US/mi/@salesforce/i18n/number.numberFormat/v/1_14_3-alpha/latest/@salesforce_i18n_number_numberFormat.js';
import percentFormat from '/1/module/esm/0/l/en-US/mi/@salesforce/i18n/number.percentFormat/v/1_14_3-alpha/latest/@salesforce_i18n_number_percentFormat.js';
import currencyFormat from '/1/module/esm/0/l/en-US/mi/@salesforce/i18n/number.currencyFormat/v/1_14_3-alpha/latest/@salesforce_i18n_number_currencyFormat.js';
import currency from '/1/module/esm/0/l/en-US/mi/@salesforce/i18n/currency/v/1_14_3-alpha/latest/@salesforce_i18n_currency.js';
import { updateFractionPart, updateIntegerPart, updateCurrencySymbol, getCurrency } from '/1/module/esm/0/l/en-US/mi/lightning/internationalizationLibrary#number/utils/v/1_14_3-alpha/latest/lightning_internationalizationLibrary_number_utils.js';

function NumberOptions(options) {
  this.options = options || {};
}

NumberOptions.prototype.isCurrency = function () {
  return this.options.style === 'currency';
};

NumberOptions.prototype.isPercent = function () {
  return this.options.style === 'percent';
};

NumberOptions.prototype.isDefaultCurrency = function () {
  return !this.options.currency || currency === this.options.currency;
};

NumberOptions.prototype.getDefaultSkeleton = function () {
  return this.isCurrency() ? currencyFormat : this.isPercent() ? percentFormat : numberFormat;
};

NumberOptions.prototype.getSkeleton = function () {
  const options = this.options;
  const defaultSkeleton = this.getDefaultSkeleton();
  let skeleton = updateFractionPart(defaultSkeleton, options);
  skeleton = updateIntegerPart(skeleton, options);

  if (!this.isDefaultCurrency()) {
    skeleton = updateCurrencySymbol(skeleton, getCurrency(options), options);
  }

  return skeleton;
};

export { NumberOptions };