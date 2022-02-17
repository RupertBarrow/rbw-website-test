import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning%2FinputAddress%23inputAddress.html%2Fv%2F1_14_3-alpha/latest/lightning_inputAddress_inputAddress_html.js";

/* eslint-disable @lwc/lwc/no-api-reassignments */
import labelRequired from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningControl.required%2Fv%2F1_14_3-alpha/latest/@salesforce_label_LightningControl_required.js';
import locale from '/1/module/esm/0/l/en-US/mi/@salesforce%2Fi18n%2Flocale%2Fv%2F1_14_3-alpha/latest/@salesforce_i18n_locale.js';
import { classSet } from '/1/module/esm/0/l/en-US/mi/lightning%2Futils%2Fv%2F1_14_3-alpha/latest/lightning_utils.js';
import { assert, normalizeBoolean, classListMutation } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_3-alpha/latest/lightning_utilsPrivate.js';
import { isEmptyString, FieldConstraintApi, InteractingState, normalizeVariant, VARIANT } from '/1/module/esm/0/l/en-US/mi/lightning%2FinputUtils%2Fv%2F1_14_3-alpha/latest/lightning_inputUtils.js';
import { getInputOrder, getRequiredFields } from '/1/module/esm/0/l/en-US/mi/lightning%2FinputAddress%23addressFormat%2Fv%2F1_14_3-alpha/latest/lightning_inputAddress_addressFormat.js';
import { getFieldWidth, getFieldWidthClass, getTransformedFieldsMetaForLayout } from '/1/module/esm/0/l/en-US/mi/lightning%2FinputAddress%23fieldsLayout%2Fv%2F1_14_3-alpha/latest/lightning_inputAddress_fieldsLayout.js';
const FIELD_TYPE = {
  TEXTAREA: 'textarea',
  INPUT: 'input',
  PICKLIST: 'combobox'
};
const i18n = {
  required: labelRequired
};
/**
 * Represents an address compound field.
 */

class LightningInputAddress extends LightningElement {
  constructor(...args) {
    super(...args);
    this.addressLabel = void 0;
    this.streetLabel = void 0;
    this.cityLabel = void 0;
    this.provinceLabel = void 0;
    this.countryLabel = void 0;
    this.postalCodeLabel = void 0;
    this.streetPlaceholder = void 0;
    this.cityPlaceholder = void 0;
    this.provincePlaceholder = void 0;
    this.countryPlaceholder = void 0;
    this.postalCodePlaceholder = void 0;
    this.addressLookupPlaceholder = void 0;
    this.provinceOptions = void 0;
    this.countryOptions = void 0;
    this.countryDisabled = void 0;
    this._showAddressLookup = void 0;
    this._fieldLevelHelp = void 0;
    this._variant = void 0;
    this._street = '';
    this._city = '';
    this._province = '';
    this._country = '';
    this._postalCode = '';
    this._disabled = false;
    this._readonly = false;
    this._required = false;
  }

  connectedCallback() {
    this._connected = true;
    this.classList.add('slds-form-element', 'slds-form_compound');
    this.updateClassList();
    this.interactingState = new InteractingState({
      debounceInteraction: true
    });
    this.interactingState.onenter(() => {
      this.dispatchEvent(new CustomEvent('focus'));
    });
    this.interactingState.onleave(() => {
      this.reportValidity();
      this.dispatchEvent(new CustomEvent('blur'));
    });
  }

  updateClassList() {
    classListMutation(this.classList, {
      'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
      'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
    });
  }

  disconnectedCallback() {
    this._connected = false;
  }
  /**
   * The value for the street field.
   * Maximum length is 255 characters.
   * @type {string}
   *
   */


  get street() {
    return this._street;
  }

  set street(value) {
    this._street = value;
  }
  /**
   * The value for the city field.
   * Maximum length is 40 characters.
   * @type {string}
   *
   */


  get city() {
    return this._city;
  }

  set city(value) {
    this._city = value;
  }
  /**
   * The province field for the address. If province-options is provided, this province value is selected by default.
   * Maximum length is 80 characters.
   * @type {string}
   *
   */


  get province() {
    return this._province;
  }

  set province(value) {
    this._province = value;
  }
  /**
   * The country field for the address. If country-options is provided, this country value is selected by default.
   * Maximum length is 80 characters.
   * @type {string}
   *
   */


  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }
  /**
   * The value for postal code field.
   * Maximum length is 20 characters.
   * @type {string}
   *
   */


  get postalCode() {
    return this._postalCode;
  }

  set postalCode(value) {
    this._postalCode = value;
  }
  /**
   * If present, the address fields are disabled and users cannot interact with them.
   * @type {boolean}
   * @default false
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }
  /**
   * If present, address lookup using Google Maps is enabled.
   * @type {boolean}
   * @default false
   */


  get showAddressLookup() {
    return this._showAddressLookup;
  }

  set showAddressLookup(value) {
    this._showAddressLookup = normalizeBoolean(value);
  }
  /**
   * If present, the address fields are read-only and cannot be edited.
   * @type {boolean}
   * @default false
   */


  get readOnly() {
    return this._readonly;
  }

  set readOnly(value) {
    this._readonly = normalizeBoolean(value);
  }
  /**
   * If present, the address fields must be filled before the form is submitted.
   * @type {boolean}
   * @default false
   */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = normalizeBoolean(value);
  }
  /**
   * The variant changes the appearance of an input address field.
   * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
   * This value defaults to standard.
   * Use label-hidden to hide the compound field label but make it available to assistive technology.
   * Use label-inline to horizontally align the label and input address field.
   * Use label-stacked to place the label above the input address field.
   * @type {string}
   * @default standard
   */


  get variant() {
    return this._variant || VARIANT.STANDARD;
  }

  set variant(value) {
    this._variant = normalizeVariant(value);
    this.updateClassList();
  }

  set fieldLevelHelp(value) {
    this._fieldLevelHelp = value;
  }
  /**
   * Help text detailing the purpose and function of the input.
   * @type {string}
   *
   */


  get fieldLevelHelp() {
    return this._fieldLevelHelp;
  }
  /**
   * Represents the validity states that an element can be in, with respect to constraint validation.
   * @type {object}
   *
   */


  get validity() {
    return this._combinedConstraint.validity;
  }
  /**
   * Checks if the input is valid.
   * @returns {boolean} Indicates whether the element meets all constraint validations.
   */


  checkValidity() {
    return this._combinedConstraint.checkValidity();
  }
  /**
   * Displays error messages on the address fields if the values are invalid.
   */


  showHelpMessageIfInvalid() {
    this.reportValidity();
  }
  /**
   * Sets a custom error message to be displayed for the specified fieldName when
   * the input address value is submitted.
   * @param {string} message - The string that describes the error. If message is an empty string, the error message is reset.
   * @param {string} fieldName - Name of the field, which must be one of the following: street, city, province, postalCode, country.
   */


  setCustomValidityForField(message, fieldName) {
    assert(this.fieldsMeta[fieldName] !== undefined, `Invalid 'fieldName': ${fieldName}`);

    this._fieldConstraints[fieldName].setCustomValidity(message);
  }
  /**
   * Displays the error messages and returns false if the input is invalid.
   * If the input is valid, reportValidity() clears displayed error messages and returns true.
   * @returns {boolean} - The validity status of the input fields.
   */


  reportValidity() {
    const valid = this.checkValidity();

    if (!this._connected) {
      return valid;
    }

    this.inputOrder.forEach(field => {
      this._reportValidityForField(field);
    });
    return valid;
  }
  /**
   * Sets focus on the first input element.
   */


  focus() {
    this.template.querySelector('[data-field]').focus();
  }
  /**
   * Removes focus from all input fields.
   */


  blur() {
    Array.prototype.forEach.call(this.template.querySelectorAll('[data-field]'), field => field.blur());
  }

  get searchAddressButtonDisabled() {
    return this.disabled || this.readOnly;
  }

  get i18n() {
    return i18n;
  }

  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }

  get computedLegendClass() {
    return classSet('slds-form-element__label slds-form-element__legend').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }

  get fieldsTypeMeta() {
    return {
      street: {
        // See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
        // for autocomplete attributes
        autocomplete: 'street-address',
        name: 'street',
        maxlength: 255,
        type: FIELD_TYPE.TEXTAREA
      },
      city: {
        autocomplete: 'address-level2',
        name: 'city',
        maxlength: 40,
        type: FIELD_TYPE.INPUT
      },
      province: {
        autocomplete: 'address-level1',
        name: 'province',
        maxlength: 80,
        type: this.isProvincePicklistEnabled() ? FIELD_TYPE.PICKLIST : FIELD_TYPE.INPUT
      },
      postalCode: {
        autocomplete: 'postal-code',
        name: 'postalCode',
        maxlength: 20,
        type: FIELD_TYPE.INPUT
      },
      country: {
        autocomplete: 'country',
        name: 'country',
        maxlength: 80,
        type: this.isCountryPicklistEnabled() ? FIELD_TYPE.PICKLIST : FIELD_TYPE.INPUT
      }
    };
  }

  get inputOrder() {
    const hasCountryPicklist = this.fieldsTypeMeta.country.type === FIELD_TYPE.PICKLIST;
    const [langCode, countryCode] = locale.split('-');
    return getInputOrder(langCode, countryCode, hasCountryPicklist);
  }

  get requiredFields() {
    const [langCode, countryCode] = locale.split('-');
    return getRequiredFields(langCode, countryCode);
  }

  get fieldsMeta() {
    const fieldsMeta = {};
    this.inputOrder.forEach(name => {
      fieldsMeta[name] = Object.assign({}, this.fieldsTypeMeta[name], getFieldWidth(name));
    });
    this.requiredFields.forEach(name => {
      fieldsMeta[name].required = true;
    });
    return fieldsMeta;
  }

  get domFieldsMeta() {
    let rowKey = 0;
    const out = getTransformedFieldsMetaForLayout(this.fieldsMeta, this.inputOrder).map(row => {
      const rowList = row.map(field => {
        const {
          name,
          type,
          required,
          maxlength,
          autocomplete
        } = field;
        const widthClass = getFieldWidthClass(field);
        return {
          isInput: type === FIELD_TYPE.INPUT,
          isPicklist: type === FIELD_TYPE.PICKLIST,
          isTextArea: type === FIELD_TYPE.TEXTAREA,
          value: this.getFieldValue(name),
          options: this.getFieldOptions(name),
          required: this.required && !!required,
          disabled: this.getFieldDisabled(name) || this.disabled,
          classnames: `slds-form-element slds-show ${widthClass}`,
          placeholder: this.getFieldPlaceholder(name),
          label: this.getFieldLabel(name),
          autocomplete,
          maxlength,
          name
        };
      });
      rowList.name = rowKey++;
      return rowList;
    });
    return out;
  }

  isCountryPicklistEnabled() {
    return Array.isArray(this.countryOptions);
  }

  isProvincePicklistEnabled() {
    return Array.isArray(this.provinceOptions);
  }

  handleAddress(evt) {
    const address = evt.detail.address || {};
    this.street = address.street || '';
    this.city = address.city || '';
    this.province = address.state || '';
    const country = this.isCountryPicklistEnabled() ? address.countryCode : address.country;
    this.country = country || '';
    this.postalCode = address.postalCode || '';
    this.dispatchAddressChangeEvent();
  }

  handleFocus() {
    this.interactingState.enter();
  }

  handleBlur(event) {
    this.interactingState.leave();
    const field = event.target.dataset.field;

    this._reportValidityForField(field);
  }

  handleChange(event) {
    event.stopPropagation();
    const fieldName = event.target.dataset.field;
    const value = event.detail.value;

    if (this.getFieldValue(fieldName) === value) {
      // Value didn't change. No need to dispatch.
      return;
    }

    this[fieldName] = value;
    this.dispatchAddressChangeEvent();
  }

  dispatchAddressChangeEvent() {
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: {
        street: this.street,
        city: this.city,
        province: this.province,
        country: this.country,
        postalCode: this.postalCode,
        validity: this.validity
      }
    }));
  }

  getFieldValue(fieldName) {
    return this[fieldName];
  }

  getFieldOptions(fieldName) {
    return this[`${fieldName}Options`];
  }

  getFieldLabel(fieldName) {
    return this[`${fieldName}Label`];
  }

  getFieldPlaceholder(fieldName) {
    return this[`${fieldName}Placeholder`];
  }

  getFieldDisabled(fieldName) {
    return !!this[`${fieldName}Disabled`];
  }

  getFieldElement(fieldName) {
    return this.template.querySelector(`[data-field="${fieldName}"]`);
  }

  get _fieldConstraints() {
    if (!this._fieldConstraintApis) {
      // For every field to display create an appropriate constraint
      this._fieldConstraintApis = ['street', 'city', 'province', 'country', 'postalCode'].reduce((constraints, field) => {
        constraints[field] = new FieldConstraintApi(() => this.getFieldElement(field), {
          valueMissing: () => !this.disabled && this.required && this.requiredFields.indexOf(field) >= 0 && isEmptyString(this[field])
        });
        return constraints;
      }, {});
    }

    return this._fieldConstraintApis;
  }

  get _combinedConstraint() {
    if (!this._combinedConstraintApi) {
      this._combinedConstraintApi = new FieldConstraintApi(() => this, {
        customError: () => Object.values(this._fieldConstraints).some(constraint => constraint.validity.customError),
        valueMissing: () => Object.values(this._fieldConstraints).some(constraint => constraint.validity.valueMissing)
      });
    }

    return this._combinedConstraintApi;
  }

  _reportValidityForField(field) {
    if (this._fieldConstraints[field]) {
      this._fieldConstraints[field].reportValidity(helpMessage => {
        const fieldElement = this.getFieldElement(field);
        fieldElement.setCustomValidity(helpMessage);
        fieldElement.reportValidity();
      });
    }
  }

}

LightningInputAddress.delegatesFocus = true;

_registerDecorators(LightningInputAddress, {
  publicProps: {
    addressLabel: {
      config: 0
    },
    streetLabel: {
      config: 0
    },
    cityLabel: {
      config: 0
    },
    provinceLabel: {
      config: 0
    },
    countryLabel: {
      config: 0
    },
    postalCodeLabel: {
      config: 0
    },
    streetPlaceholder: {
      config: 0
    },
    cityPlaceholder: {
      config: 0
    },
    provincePlaceholder: {
      config: 0
    },
    countryPlaceholder: {
      config: 0
    },
    postalCodePlaceholder: {
      config: 0
    },
    addressLookupPlaceholder: {
      config: 0
    },
    provinceOptions: {
      config: 0
    },
    countryOptions: {
      config: 0
    },
    countryDisabled: {
      config: 0
    },
    street: {
      config: 3
    },
    city: {
      config: 3
    },
    province: {
      config: 3
    },
    country: {
      config: 3
    },
    postalCode: {
      config: 3
    },
    disabled: {
      config: 3
    },
    showAddressLookup: {
      config: 3
    },
    readOnly: {
      config: 3
    },
    required: {
      config: 3
    },
    variant: {
      config: 3
    },
    fieldLevelHelp: {
      config: 3
    },
    validity: {
      config: 1
    }
  },
  publicMethods: ["checkValidity", "showHelpMessageIfInvalid", "setCustomValidityForField", "reportValidity", "focus", "blur"],
  track: {
    _showAddressLookup: 1,
    _fieldLevelHelp: 1,
    _variant: 1,
    _street: 1,
    _city: 1,
    _province: 1,
    _country: 1,
    _postalCode: 1,
    _disabled: 1,
    _readonly: 1,
    _required: 1
  }
});

export default _registerComponent(LightningInputAddress, {
  tmpl: _tmpl
});