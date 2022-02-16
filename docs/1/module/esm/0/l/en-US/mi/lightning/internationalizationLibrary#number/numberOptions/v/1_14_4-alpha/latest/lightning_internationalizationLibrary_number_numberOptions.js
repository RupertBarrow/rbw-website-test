import numberFormat from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Fi18n%2Fnumber.numberFormat%2Fv%2F1_14_4-alpha/latest/@salesforce_i18n_number_numberFormat.js';
import percentFormat from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Fi18n%2Fnumber.percentFormat%2Fv%2F1_14_4-alpha/latest/@salesforce_i18n_number_percentFormat.js';
import currencyFormat from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Fi18n%2Fnumber.currencyFormat%2Fv%2F1_14_4-alpha/latest/@salesforce_i18n_number_currencyFormat.js';
import currency from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Fi18n%2Fcurrency%2Fv%2F1_14_4-alpha/latest/@salesforce_i18n_currency.js';
import { updateFractionPart, updateIntegerPart, updateCurrencySymbol, getCurrency } from '/1/module/esm/0/l/en-US/mi/lightning%2FinternationalizationLibrary%23number%2Futils%2Fv%2F1_14_4-alpha/latest/lightning_internationalizationLibrary_number_utils.js';

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