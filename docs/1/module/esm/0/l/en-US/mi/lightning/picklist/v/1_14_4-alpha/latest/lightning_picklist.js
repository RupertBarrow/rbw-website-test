import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning%2Fpicklist%23picklist.html%2Fv%2F1_14_4-alpha/latest/lightning_picklist_picklist_html.js";
import labelNoneLabel from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningPicklist.noneLabel%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningPicklist_noneLabel.js';
import labelAvailable from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningPicklist.available%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningPicklist_available.js';
import labelChosen from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningPicklist.chosen%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningPicklist_chosen.js';
import { normalizeBoolean, arraysEqual } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_4-alpha/latest/lightning_utilsPrivate.js';
import formFactor from '/1/module/esm/0/l/en-US/mi/@salesforce%2Fclient%2FformFactor%2Fv%2F1_14_4-alpha/latest/@salesforce_client_formFactor.js';
const i18n = {
  noneLabel: labelNoneLabel,
  available: labelAvailable,
  chosen: labelChosen
};
const PROGRAMMATIC_CHANGE = true;

class LightningPicklist extends LightningElement {
  constructor(...args) {
    super(...args);
    this._internalValue = void 0;
    this._picklistValue = void 0;
    this._options = void 0;
    this._required = false;
    this._disabled = false;
    this._size = 4;
    this._showActivityIndicator = false;
    this._fieldLevelHelp = void 0;
    this.label = void 0;
    this.name = void 0;
    this.placeholder = void 0;
    this.variant = void 0;
    this.autocomplete = 'off';
  }

  set fieldLevelHelp(value) {
    this._fieldLevelHelp = value;
  }

  get fieldLevelHelp() {
    return this._fieldLevelHelp;
  }

  set value(newValue) {
    this._picklistValue = newValue;

    if (this.connected) {
      this.updateInternalValue(newValue, PROGRAMMATIC_CHANGE);
    }
  }

  get value() {
    return this._picklistValue;
  } // only works for multi-select picklists


  set size(value) {
    this._size = this.normalizeSize(value);
  }

  get size() {
    return this._size;
  }

  set options(newOptions) {
    this._options = newOptions;

    if (this.connected) {
      this.updatePicklistOptions(newOptions);
    }
  }

  get options() {
    return this._options;
  }

  set multiple(value) {
    this._multiple = normalizeBoolean(value);
  }

  get multiple() {
    return this._multiple || false;
  }

  set required(value) {
    this._required = normalizeBoolean(value); // reset the flag that hides the required indicator when we have no options

    this._requiredButDisabled = false;
  }

  get required() {
    return this._required;
  }

  set disabled(value) {
    this._disabled = normalizeBoolean(value); // There are two ways a picklist could end up in a disabled state:
    // 1- explicitly setting disabled and 2- when the picklist has no options
    // If the element is explicitly set to be disabled, it should always remain disabled even when new options are provided

    this._externalDisabled = value;
  }

  get disabled() {
    return this._disabled;
  }

  set showActivityIndicator(value) {
    this._showActivityIndicator = normalizeBoolean(value);
  }

  get showActivityIndicator() {
    return this._showActivityIndicator || false;
  }

  connectedCallback() {
    this.updatePicklistOptions(this._options, true);
    this.connected = true;
  }

  disconnectedCallback() {
    this.connected = false;
  }

  focus() {
    if (this.connected) {
      this.getElement.focus();
    }
  }

  blur() {
    if (this.connected) {
      this.getElement.blur();
    }
  }

  get validity() {
    if (this.connected) {
      return this.getElement.validity;
    }

    return null;
  }

  checkValidity() {
    if (this.connected) {
      return this.validity.valid;
    }

    return false;
  }

  setCustomValidity(message) {
    if (this.connected) {
      this.getElement.setCustomValidity(message);
    }
  }

  reportValidity() {
    if (this.connected) {
      return this.getElement.reportValidity();
    }

    return false;
  }

  showHelpMessageIfInvalid() {
    if (this.connected) {
      this.getElement.showHelpMessageIfInvalid();
    }
  }

  get i18n() {
    return i18n;
  }

  get internalValue() {
    return this._internalValue !== undefined ? this._internalValue : this.getInternalValue(this._picklistValue);
  }

  updateInternalValue(value, isProgrammatic) {
    const oldInternalValue = this.internalValue;
    this._internalValue = this.getInternalValue(value);

    if (!this.isSameValue(value, oldInternalValue)) {
      this._picklistValue = this.getPicklistValue(value);
      this.dispatchChangeEvent(isProgrammatic);
    }
  }

  get getElement() {
    return this.template.querySelector('lightning-combobox,lightning-dual-listbox,lightning-select');
  } // disable reordering functionality on dual-listbox


  get disableReordering() {
    return true;
  }

  get isDesktop() {
    return formFactor === 'Large';
  }

  updatePicklistOptions(options, addMissingValues) {
    const newOptions = options ? [...options] : [];
    const existingInternalValue = this.internalValue;

    if (addMissingValues) {
      this.addMissingValuesToOptions(newOptions, existingInternalValue);
    }

    this.maybeAddNoneOption(newOptions);
    this._options = newOptions;
    this.updateDisabledState(options);
    this.updateRequiredState(options);
    const value = this.getValueToSelect(this.options, existingInternalValue);
    this.updateInternalValue(value, PROGRAMMATIC_CHANGE);
  }

  isSameValue(value1, value2) {
    if (Array.isArray(value1) && Array.isArray(value2)) {
      const a = [...value1].sort();
      const b = [...value2].sort();
      return arraysEqual(a, b);
    }

    return value1 === value2;
  }

  handleChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const newValue = event.target.value;
    this.updateInternalValue(newValue);
  }

  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }

  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }

  handleOpen() {
    // fire internal event for some force components to leverage
    // e.g. to display the spinner while loading more picklist values
    this.dispatchEvent(new CustomEvent('open'));
  }

  maybeAddNoneOption(options) {
    if (this.shouldAddNoneOption(options.length)) {
      this.addOption(options, this.i18n.noneLabel, '');
    }
  }

  addOption(options, label, value) {
    options.unshift({
      label,
      value
    });
  }

  shouldDisablePicklist(options) {
    if (!options || options.length === 0) {
      return true;
    }

    return false;
  }

  shouldAddNoneOption(numberOfOptions) {
    if (this.multiple) {
      return false;
    } // We could have set required=false if the picklist had no options, see updateDisabledState and updateRequiredState


    const isRequiredPicklist = this.required || this._requiredButDisabled;

    if (isRequiredPicklist && numberOfOptions === 1) {
      return false;
    }

    return true;
  }

  updateDisabledState(options) {
    this._disabled = this._externalDisabled !== undefined ? normalizeBoolean(this._externalDisabled) : this.shouldDisablePicklist(options);
  }

  updateRequiredState(options) {
    const shouldDisable = this.shouldDisablePicklist(options);

    if (shouldDisable) {
      if (this._required) {
        // when disabling the picklist, we should remove the required indicator
        this._required = false;
        this._requiredButDisabled = true;
      }

      if (this.connected && this.validity.valueMissing) {
        // if we're disabling the picklist, we should make sure any existing valueMissing message is cleared
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        requestAnimationFrame(() => {
          this.showHelpMessageIfInvalid();
        });
      }
    } else if (this._requiredButDisabled) {
      // we now have some options and are not going to have a disabled picklist, so we'll put the required flag back to what it was before
      this._requiredButDisabled = false;
      this._required = true;
    }
  }

  getValueToSelect(options, existingValue) {
    if (!options || options.length === 0) {
      return this.multiple ? [] : '';
    }

    if (this.isValueInOptions(existingValue, options)) {
      return existingValue;
    }

    if (this.multiple) {
      return [];
    }

    if (this.shouldAddNoneOption([...options].length)) {
      return '';
    }

    return options[0].value;
  }

  isValueInOptions(value, options) {
    if (!options || options.length === 0) {
      return false;
    }

    const valueIsInOptions = valueToCheck => options.some(option => {
      return option.value === valueToCheck;
    });

    let valueExists = false;

    if (Array.isArray(value)) {
      valueExists = value.every(valueToCheck => {
        return valueIsInOptions(valueToCheck);
      });
    } else {
      valueExists = valueIsInOptions(value);
    }

    return valueExists;
  } // If values are missing from the options, we will add them to the options.
  // However, since we don't have the label, the same value will be used as label
  // See W-4829389


  addMissingValuesToOptions(newOptions, value) {
    if (!value || Array.isArray(value) && value.length === 0) {
      return;
    }

    const valueIsInOptions = valueToCheck => {
      return newOptions.some(option => {
        return option.value === valueToCheck;
      });
    };

    const maybeAddOption = valueToCheck => {
      if (!valueIsInOptions(valueToCheck)) {
        // Since we don't have the label, we will use the value instead
        this.addOption(newOptions, valueToCheck, valueToCheck);
      }
    };

    if (Array.isArray(value)) {
      value.forEach(valueToCheck => {
        maybeAddOption(valueToCheck);
      });
    } else {
      maybeAddOption(value);
    }
  }

  dispatchChangeEvent(isProgrammatic) {
    const detail = {
      value: this._picklistValue
    };

    if (isProgrammatic) {
      detail.programmatic = true;
    }

    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail
    }));
  }

  getPicklistValue(value) {
    // multi select picklists should have a ';' separated value string
    if (this.multiple && Array.isArray(value)) {
      return value.join(';');
    }

    return value;
  } // This is the value that is passed into the subcomponents dual-listbox and combobox.
  // In the case of dual-listbox, the component accepts an array of selected values.


  getInternalValue(value) {
    if (this.multiple) {
      if (Array.isArray(value)) {
        return value;
      }

      return typeof value === 'string' && value !== '' && value.split(';') || [];
    } // When value is null, None option('') should be selected


    if (value == null) {
      return '';
    }

    return value;
  }

  normalizeSize(value) {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue) || parsedValue < 3 || parsedValue > 10) {
      // A picklist field can only have a size between 3 and 10 when created declaratively
      // however, there seems to be cases where the size can be outside of this range.
      // In such cases, we will use the default value instead of throwing an error
      return 4;
    }

    return parsedValue;
  }

}

LightningPicklist.delegatesFocus = true;

_registerDecorators(LightningPicklist, {
  publicProps: {
    label: {
      config: 0
    },
    name: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    variant: {
      config: 0
    },
    autocomplete: {
      config: 0
    },
    fieldLevelHelp: {
      config: 3
    },
    value: {
      config: 3
    },
    size: {
      config: 3
    },
    options: {
      config: 3
    },
    multiple: {
      config: 3
    },
    required: {
      config: 3
    },
    disabled: {
      config: 3
    },
    showActivityIndicator: {
      config: 3
    },
    validity: {
      config: 1
    }
  },
  publicMethods: ["focus", "blur", "checkValidity", "setCustomValidity", "reportValidity", "showHelpMessageIfInvalid"],
  track: {
    _internalValue: 1,
    _picklistValue: 1,
    _options: 1,
    _required: 1,
    _disabled: 1,
    _size: 1,
    _showActivityIndicator: 1,
    _fieldLevelHelp: 1
  }
});

export default _registerComponent(LightningPicklist, {
  tmpl: _tmpl
});