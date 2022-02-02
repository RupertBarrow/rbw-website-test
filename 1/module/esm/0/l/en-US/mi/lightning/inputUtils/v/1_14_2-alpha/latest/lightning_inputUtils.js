export { generateUniqueId } from '/1/module/esm/0/l/en-US/mi/lightning/inputUtils#idGenerator/v/1_14_2-alpha/latest/lightning_inputUtils_idGenerator.js';
export { InteractingState, debounce } from '/1/module/esm/0/l/en-US/mi/lightning/inputUtils#interacting/v/1_14_2-alpha/latest/lightning_inputUtils_interacting.js';
export { buildSyntheticValidity, getErrorMessage, FieldConstraintApiWithProxyInput, FieldConstraintApi } from '/1/module/esm/0/l/en-US/mi/lightning/inputUtils#validity/v/1_14_2-alpha/latest/lightning_inputUtils_validity.js';
export { normalizeVariant, VARIANT } from '/1/module/esm/0/l/en-US/mi/lightning/inputUtils#normalize/v/1_14_2-alpha/latest/lightning_inputUtils_normalize.js';
export function isEmptyString(s) {
  return s === undefined || s === null || typeof s === 'string' && s.trim() === '';
}