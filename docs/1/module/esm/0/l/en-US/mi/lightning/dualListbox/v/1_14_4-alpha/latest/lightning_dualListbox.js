import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning%2FdualListbox%23dualListbox.html%2Fv%2F1_14_4-alpha/latest/lightning_dualListbox_dualListbox_html.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import labelComponentAssistiveText from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.componentAssistiveText%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_componentAssistiveText.js';
import labelDownButtonAssistiveText from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.downButtonAssistiveText%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_downButtonAssistiveText.js';
import labelMaxError from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.maxError%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_maxError.js';
import labelMaxHelp from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.maxHelp%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_maxHelp.js';
import labelMinErrorPlural from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.minErrorPlural%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_minErrorPlural.js';
import labelMinErrorSingular from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.minErrorSingular%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_minErrorSingular.js';
import labelMinHelp from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.minHelp%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_minHelp.js';
import labelMinRequiredErrorPlural from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.minRequiredErrorPlural%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_minRequiredErrorPlural.js';
import labelMinRequiredErrorSingular from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.minRequiredErrorSingular%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_minRequiredErrorSingular.js';
import labelOptionLockAssistiveText from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.optionLockAssistiveText%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_optionLockAssistiveText.js';
import labelRequired from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningControl.required%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningControl_required.js';
import labelRequiredError from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.requiredError%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_requiredError.js';
import labelRequiredOptionError from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.requiredOptionError%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_requiredOptionError.js';
import labelUpButtonAssistiveText from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.upButtonAssistiveText%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_upButtonAssistiveText.js';
import labelMoveSelectionToAssistiveText from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.moveSelectionToAssistiveText%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_moveSelectionToAssistiveText.js';
import labelLoadingText from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningCombobox.loadingText%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningCombobox_loadingText.js';
import labelMovedOptionsSingular from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.movedOptionsSingular%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_movedOptionsSingular.js';
import labelMovedOptionsPlural from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningDualListbox.movedOptionsPlural%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningDualListbox_movedOptionsPlural.js';
import { handleKeyDownOnOption } from '/1/module/esm/0/l/en-US/mi/lightning%2FdualListbox%23keyboard%2Fv%2F1_14_4-alpha/latest/lightning_dualListbox_keyboard.js';
import { classSet, formatLabel } from '/1/module/esm/0/l/en-US/mi/lightning%2Futils%2Fv%2F1_14_4-alpha/latest/lightning_utils.js';
import { assert, normalizeBoolean, getRealDOMId, classListMutation } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_4-alpha/latest/lightning_utilsPrivate.js';
import { InteractingState, FieldConstraintApi, normalizeVariant, VARIANT } from '/1/module/esm/0/l/en-US/mi/lightning%2FinputUtils%2Fv%2F1_14_4-alpha/latest/lightning_inputUtils.js';
const i18n = {
  componentAssistiveText: labelComponentAssistiveText,
  downButtonAssistiveText: labelDownButtonAssistiveText,
  maxError: labelMaxError,
  maxHelp: labelMaxHelp,
  minErrorPlural: labelMinErrorPlural,
  minErrorSingular: labelMinErrorSingular,
  minHelp: labelMinHelp,
  minRequiredErrorPlural: labelMinRequiredErrorPlural,
  minRequiredErrorSingular: labelMinRequiredErrorSingular,
  optionLockAssistiveText: labelOptionLockAssistiveText,
  required: labelRequired,
  requiredError: labelRequiredError,
  requiredOptionError: labelRequiredOptionError,
  upButtonAssistiveText: labelUpButtonAssistiveText,
  moveSelectionToAssistiveText: labelMoveSelectionToAssistiveText,
  loadingText: labelLoadingText,
  movedOptionsSingular: labelMovedOptionsSingular,
  movedOptionsPlural: labelMovedOptionsPlural
};
/**
 * A pair of listboxes that enables multiple options to be selected and reordered.
 */

class LightningDualListbox extends LightningElement {
  constructor(...args) {
    super(...args);
    this.sourceLabel = void 0;
    this.selectedLabel = void 0;
    this.label = void 0;
    this.options = void 0;
    this.min = 0;
    this.max = void 0;
    this.name = void 0;
    this._showActivityIndicator = false;
    this._requiredOptions = [];
    this._selectedValues = [];
    this._variant = void 0;
    this._disabled = void 0;
    this._disableReordering = false;
    this._required = false;
    this._addButtonLabel = void 0;
    this._removeButtonLabel = void 0;
    this._upButtonLabel = void 0;
    this._downButtonLabel = void 0;
    this._size = void 0;
    this.errorMessage = '';
    this.highlightedOptions = [];
    this.focusableInSource = void 0;
    this.focusableInSelected = void 0;
    this.highlightedOptionsLabel = [];
    this._messageToDisplay = '';
    this.isFocusOnList = false;
    this.messageWhenValueMissing = i18n.requiredError;
    this.fieldLevelHelp = void 0;
  }

  /**
   * Error message to be displayed when a range overflow is detected.
   * @type {string}
   */
  get messageWhenRangeOverflow() {
    return this._messageWhenRangeOverflow || this._overflowMessage;
  }

  set messageWhenRangeOverflow(message) {
    this._messageWhenRangeOverflow = message;
  }
  /**
   * Error message to be displayed when a range underflow is detected.
   * @type {string}
   */


  get messageWhenRangeUnderflow() {
    return this._messageWhenRangeUnderflow || this._underflowMessage;
  }

  set messageWhenRangeUnderflow(message) {
    this._messageWhenRangeUnderflow = message;
  }
  /**
   * If present, the listbox is disabled and users cannot interact with it.
   * @type {string}
   */


  get disabled() {
    return this._disabled || false;
  }

  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }
  /**
   * If present, the user must add an item to the selected listbox before submitting the form.
   * @type {string}
   * @default false
   */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = normalizeBoolean(value);
  }
  /**
   * A list of default options that are included in the selected options listbox. This list is populated with values from the options attribute.
   * @type {list}
   */


  get value() {
    return this._selectedValues;
  }

  set value(newValue) {
    this.updateHighlightedOptions(newValue);
    this._selectedValues = newValue || [];

    if (this._connected) {
      this.addRequiredOptionsToValue();
    }
  }
  /**
   * A list of required options that cannot be removed from selected options listbox. This list is populated with values from the options attribute.
   * @type {list}
   */


  get requiredOptions() {
    return this._requiredOptions;
  }

  set requiredOptions(newValue) {
    this._requiredOptions = newValue || [];

    if (this._connected) {
      this.addRequiredOptionsToValue();
    }
  }
  /**
   * The variant changes the appearance of the dual listbox.
   * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
   * This value defaults to standard.
   * Use label-hidden to hide the label but make it available to assistive technology.
   * Use label-inline to horizontally align the label and dual listbox.
   * Use label-stacked to place the label above the dual listbox.
   * @type {string}
   */


  get variant() {
    return this._variant || VARIANT.STANDARD;
  }

  set variant(value) {
    this._variant = normalizeVariant(value);
    this.updateClassList();
  }

  set size(value) {
    this._size = value;
  }
  /**
   * Number of items that display in the listboxes before vertical scrollbars are displayed. Determines the vertical size of the listbox.
   * @type {number}
   * @default
   */


  get size() {
    return this._size;
  }
  /**
   * Help text detailing the purpose and function of the dual listbox.
   * @type {string}
   */


  set disableReordering(value) {
    this._disableReordering = normalizeBoolean(value);
  }
  /**
   * If present, the Up and Down buttons used for reordering the selected list items are hidden.
   * @type {boolean}
   * @default false
   */


  get disableReordering() {
    return this._disableReordering;
  }
  /**
   * If present, a spinner is displayed in the first listbox to indicate loading activity.
   * @type {boolean}
   * @default false
   */


  get showActivityIndicator() {
    return this._showActivityIndicator;
  }

  set showActivityIndicator(value) {
    this._showActivityIndicator = normalizeBoolean(value);
  }
  /**
   * Sets focus on the first option from either list.
   * If the source list doesn't contain any options, the first option on the selected list is focused on.
   */


  focus() {
    // focus on the first option from either list
    // if nothing on source, then it'll pick the one on selected
    const firstOption = this.template.querySelector(`div[data-index='0']`);

    if (firstOption) {
      firstOption.focus();
      this.updateSelectedOptions(firstOption, true, false);
    }
  }
  /**
   * Represents the validity states that an element can be in, with respect to constraint validation.
   * @type {object}
   */


  get validity() {
    return this._constraint.validity;
  }
  /**
   * Returns the valid attribute value (Boolean) on the ValidityState object.
   * @returns {boolean} Indicates whether the dual listbox meets all constraint validations.
   */


  checkValidity() {
    return this._constraint.checkValidity();
  }
  /**
   * Displays the error messages and returns false if the input is invalid.
   * If the input is valid, reportValidity() clears displayed error messages and returns true.
   * @returns {boolean} - The validity status of the input fields.
   */


  reportValidity() {
    return this._constraint.reportValidity(message => {
      this.errorMessage = message;
    });
  }
  /**
   * Sets a custom error message to be displayed when the dual listbox value is submitted.
   * @param {string} message - The string that describes the error. If message is an empty string, the error message
   *     is reset.
   */


  setCustomValidity(message) {
    this._constraint.setCustomValidity(message);
  }
  /**
   * Displays an error message if the dual listbox value is required.
   */


  showHelpMessageIfInvalid() {
    this.reportValidity();
  }

  connectedCallback() {
    this.classList.add('slds-form-element');
    this.updateClassList();
    this.keyboardInterface = this.selectKeyboardInterface();
    this._connected = true;
    this.addRequiredOptionsToValue(); // debounceInteraction since DualListbox has multiple focusable elements

    this.interactingState = new InteractingState({
      debounceInteraction: true
    });
    this.interactingState.onenter(() => {
      this.dispatchEvent(new CustomEvent('focus'));
    });
    this.interactingState.onleave(() => {
      this.showHelpMessageIfInvalid();
      this.dispatchEvent(new CustomEvent('blur')); // reset the optionToFocus otherwise dualListbox will steal the focus any time it's rerendered.

      this.optionToFocus = null;
    });
  }

  updateClassList() {
    classListMutation(this.classList, {
      'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
      'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
    });
  }

  renderedCallback() {
    this.assertRequiredAttributes();

    if (this.disabled) {
      return;
    }

    if (this.optionToFocus) {
      // value could have an apostrophe, which is why we need to escape it otherwise the queryselector will not work
      const option = this.template.querySelector(`div[data-value='${this.optionToFocus.replace(/'/g, "\\'")}']`);

      if (option) {
        this.isFocusOnList = true;
        option.focus();
      }
    }
  }

  get computedUniqueId() {
    return this.uniqueId;
  }

  get computedSourceListId() {
    return getRealDOMId(this.template.querySelector('[data-source-list]'));
  }

  get computedSelectedListId() {
    return getRealDOMId(this.template.querySelector('[data-selected-list]'));
  }

  get ariaDisabled() {
    // aria-disabled works only with String not Boolean value
    return String(this.disabled);
  }

  get computedSourceList() {
    let sourceListOptions = [];

    if (this.options) {
      const required = this.requiredOptions;
      const values = this.value;
      sourceListOptions = this.options.filter(option => values.indexOf(option.value) === -1 && required.indexOf(option.value) === -1);
    }

    return this.computeListOptions(sourceListOptions, this.focusableInSource);
  }

  get computedSelectedList() {
    const selectedListOptions = [];

    if (this.options) {
      const optionsMap = {};
      this.options.forEach(option => {
        optionsMap[option.value] = _objectSpread({}, option);
      });
      this.value.forEach(optionValue => {
        const option = optionsMap[optionValue];

        if (option) {
          option.isSelected = true;
        }
      });
      this.requiredOptions.forEach(optionValue => {
        const option = optionsMap[optionValue];

        if (option) {
          option.isLocked = true;
        }
      }); // add selected items in the given order

      this.value.forEach(optionValue => {
        const option = optionsMap[optionValue];

        if (option) {
          selectedListOptions.push(option);
        }
      });
    }

    return this.computeListOptions(selectedListOptions, this.focusableInSelected);
  }

  computeListOptions(options, focusableOptionValue) {
    if (options.length > 0) {
      const focusableOption = options.find(option => {
        return option.value === focusableOptionValue;
      });
      const focusableValue = focusableOption ? focusableOption.value : options[0].value;
      return options.map(option => {
        return this.computeOptionProperties(option, focusableValue);
      });
    }

    return [];
  }

  computeOptionProperties(option, focusableValue) {
    const isSelected = this.highlightedOptions.indexOf(option.value) > -1;
    const classList = classSet('slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline').add({
      'slds-is-selected': isSelected
    }).toString();
    return _objectSpread(_objectSpread({}, option), {}, {
      tabIndex: option.value === focusableValue ? '0' : '-1',
      selected: isSelected ? 'true' : 'false',
      classList
    });
  }

  get computedLeftColumnClass() {
    return classSet('slds-dueling-list__column slds-dueling-list__column_responsive').add({
      'slds-is-relative': this.showActivityIndicator
    }).toString();
  }

  get computedColumnStyle() {
    if (this.isNumber(this.size)) {
      // From the SLDS page on how to adjust the height: lightningdesignsystem.com/components/dueling-picklist/#Responsive
      const newHeight = parseInt(this.size, 10) * 2.25 + 1;
      return `height:${newHeight}rem`;
    }

    return '';
  }

  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }

  get computedGroupLabelClass() {
    return classSet('slds-form-element__label slds-form-element__legend').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }

  get computedListboxContainerClass() {
    return classSet('slds-dueling-list__options').add({
      'slds-is-disabled': this.disabled
    }).toString();
  }

  get computedLockAssistiveText() {
    return formatLabel(this.i18n.optionLockAssistiveText, this.selectedLabel);
  }

  get i18n() {
    return i18n;
  }

  getRightButtonAssistiveText() {
    return formatLabel(i18n.moveSelectionToAssistiveText, this.selectedLabel);
  }
  /**
   * Label for add button.
   * @type {string}
   * @default Move selection to {selectedLabel}
   */


  get addButtonLabel() {
    if (this._addButtonLabel) {
      return this._addButtonLabel;
    }

    return this.getRightButtonAssistiveText();
  }

  set addButtonLabel(value) {
    this._addButtonLabel = value;
  }

  getLeftButtonAssistiveText() {
    return formatLabel(i18n.moveSelectionToAssistiveText, this.sourceLabel);
  }
  /**
   * Label for remove button.
   * @type {string}
   * @default "Move selection to {sourceLabel}"
   */


  get removeButtonLabel() {
    if (this._removeButtonLabel) {
      return this._removeButtonLabel;
    }

    return this.getLeftButtonAssistiveText();
  }

  set removeButtonLabel(value) {
    this._removeButtonLabel = value;
  }
  /**
   * Label for up button.
   * @type {string}
   * @default "Move selection up"
   */


  get upButtonLabel() {
    return this._upButtonLabel || this.i18n.upButtonAssistiveText;
  }

  set upButtonLabel(value) {
    this._upButtonLabel = value;
  }
  /**
   * Label for down button.
   * @type {string}
   * @default "Move selection down"
   */


  get downButtonLabel() {
    return this._downButtonLabel || this.i18n.downButtonAssistiveText;
  }

  set downButtonLabel(value) {
    this._downButtonLabel = value;
  }

  get moveButtonsDisabled() {
    return this.disabled || this.showActivityIndicator;
  }

  handleOptionClick(event) {
    this.interactingState.interacting();

    if (this.disabled) {
      return;
    }

    const selectMultiple = event.metaKey || event.ctrlKey || event.shiftKey;
    const option = event.currentTarget;

    if (event.shiftKey) {
      this.selectAllFromLastSelectedToOption(option, false);
      return;
    }

    const selected = selectMultiple && option.getAttribute('aria-selected') === 'true';
    this.updateSelectedOptions(option, !selected, selectMultiple);
    this.shiftIndex = -1;
  }

  handleFocus(event) {
    this.interactingState.enter(); // select the focused option if entering a listbox

    const element = event.target;

    if (element.role === 'option') {
      if (!this.isFocusOnList) {
        this.isFocusOnList = true;
        this.updateSelectedOptions(element, true, false);
      }
    }
  }

  handleBlur(event) {
    this.interactingState.leave();
    const element = event.target;

    if (element.role !== 'option') {
      this.isFocusOnList = false;
    }
  }

  handleRightButtonClick() {
    this.interactingState.interacting();
    this.moveOptionsBetweenLists(true);
  }

  handleLeftButtonClick() {
    this.interactingState.interacting();
    this.moveOptionsBetweenLists(false);
  }

  handleUpButtonClick() {
    this.interactingState.interacting();
    this.changeOrderOfOptionsInList(true);
  }

  handleDownButtonClick() {
    this.interactingState.interacting();
    this.changeOrderOfOptionsInList(false);
  }

  handleOptionKeyDown(event) {
    this.interactingState.interacting();

    if (this.disabled) {
      return;
    }

    handleKeyDownOnOption(event, this.keyboardInterface);
  }

  moveOptionsBetweenLists(addToSelect, retainFocus) {
    const isValidList = addToSelect ? this.selectedList === this.computedSourceListId : this.selectedList === this.computedSelectedListId;

    if (!isValidList) {
      return;
    }

    const toMove = this.highlightedOptions;
    const values = this.computedSelectedList.map(option => option.value);
    const required = this.requiredOptions;
    let newValues = [];

    if (addToSelect) {
      newValues = values.concat(toMove);
    } else {
      newValues = values.filter(value => toMove.indexOf(value) === -1 || required.indexOf(value) > -1);
    }

    this.movedOptions(addToSelect);
    const oldSelectedValues = this._selectedValues;
    this._selectedValues = newValues;
    const invalidMove = this.validity.valueMissing || this.validity.rangeOverflow && this.selectedList === this.computedSourceListId || this.validity.rangeUnderflow && this.selectedList === this.computedSelectedListId;

    if (invalidMove || toMove.length === 0) {
      this.showHelpMessageIfInvalid();
      this._selectedValues = oldSelectedValues;
      return;
    }

    if (retainFocus) {
      const listId = addToSelect ? this.computedSelectedListId : this.computedSourceListId;
      this.selectedList = listId;
      this.updateFocusableOption(listId, toMove[0]);
    } else {
      this.interactingState.leave();
      this.isFocusOnList = false;
      this.highlightedOptions = [];
      this.highlightedOptionsLabel = [];
      this.optionToFocus = null;
    }

    this.dispatchChangeEvent(newValues);
  }

  changeOrderOfOptionsInList(moveUp) {
    const elementList = this.getElementsOfList(this.selectedList);
    const values = this.computedSelectedList.map(option => option.value);
    const toMove = values.filter(option => this.highlightedOptions.indexOf(option) > -1);
    const validSelection = toMove.length === 0 || this.selectedList !== this.computedSelectedListId;

    if (validSelection) {
      return;
    }

    let start = moveUp ? 0 : toMove.length - 1;
    let index = values.indexOf(toMove[start]);
    const validMove = moveUp && index === 0 || !moveUp && index === values.length - 1;

    if (validMove) {
      return;
    }

    if (moveUp) {
      while (start < toMove.length) {
        index = values.indexOf(toMove[start]);
        this.swapOptions(index, index - 1, values, elementList);
        start++;
      }
    } else {
      while (start > -1) {
        index = values.indexOf(toMove[start]);
        this.swapOptions(index, index + 1, values, elementList);
        start--;
      }
    }

    this._selectedValues = values;
    this.updateFocusableOption(this.selectedList, toMove[0]);
    this.optionToFocus = null;
    this.dispatchChangeEvent(values);
  }

  selectAllFromLastSelectedToOption(option, all) {
    const listId = option.getAttribute('data-type');
    this.updateCurrentSelectedList(listId, true);
    const options = this.getElementsOfList(listId);
    const end = all ? 0 : this.getOptionIndex(option);
    this.lastSelected = this.lastSelected < 0 ? end : this.lastSelected;
    const start = all ? options.length : this.lastSelected;
    let val, select;
    this.highlightedOptions = [];
    this.highlightedOptionsLabel = [];

    for (let i = 0; i < options.length; i++) {
      select = (i - start) * (i - end) <= 0;

      if (select) {
        val = options[i].getAttribute('data-value');
        this.highlightedOptions.push(val);
      }
    }
  }

  updateSelectedOptions(option, select, isMultiple) {
    const value = option.getAttribute('data-value');
    const listId = this.getListId(option);
    const optionIndex = this.getOptionIndex(option);
    this.updateCurrentSelectedList(listId, isMultiple);

    if (select) {
      if (this.highlightedOptions.indexOf(value) === -1) {
        this.highlightedOptions.push(value);
      }
    } else {
      this.highlightedOptions.splice(this.highlightedOptions.indexOf(value), 1);
    }

    this.updateFocusableOption(listId, value);
    this.lastSelected = optionIndex;
  }

  addRequiredOptionsToValue() {
    if (!this.options || !this.options.length || !this._requiredOptions || !this._requiredOptions.length) {
      // no options/requiredOptions, just ignore
      return;
    }

    const numOfSelectedValues = this._selectedValues.length;
    const allValues = this.options.map(option => option.value);

    const requiredValues = this._requiredOptions.filter(option => allValues.includes(option)); // add required options to the selected values as they are already displayed in the selected list


    this._selectedValues = [...new Set([...requiredValues, ...this._selectedValues])];

    if (numOfSelectedValues !== this._selectedValues.length) {
      // value was changed
      this.dispatchChangeEvent(this._selectedValues);
    }
  }

  get _constraint() {
    if (!this._constraintApi) {
      this._constraintApi = new FieldConstraintApi(() => this, {
        valueMissing: () => !this.disabled && this.required && this.computedSelectedList.length < 1,
        rangeUnderflow: () => this.computedSelectedList.length < this.min,
        rangeOverflow: () => this.computedSelectedList.length > this.max
      });
    }

    return this._constraintApi;
  }

  get _overflowMessage() {
    const minHelpMsg = this.min > 0 ? formatLabel(this.i18n.minHelp, this.min) : '';
    return formatLabel(this.i18n.maxError, this.max) + minHelpMsg;
  }

  get _underflowMessage() {
    const maxHelpMsg = this.max ? formatLabel(this.i18n.maxHelp, this.max) : '';
    const minRequiredError = this.min > 1 ? formatLabel(this.i18n.minRequiredErrorPlural, this.min) : this.i18n.minRequiredErrorSingular;
    const minError = this.min > 1 ? formatLabel(this.i18n.minErrorPlural, this.min) : this.i18n.minErrorSingular;
    return this.required ? minRequiredError + maxHelpMsg : minError + maxHelpMsg;
  }

  updateCurrentSelectedList(currentList, isMultiple) {
    if (this.selectedList !== currentList || !isMultiple) {
      if (this.selectedList) {
        this.highlightedOptions = [];
        this.highlightedOptionsLabel = [];
        this.lastSelected = -1;
      }

      this.selectedList = currentList;
    }
  }

  dispatchChangeEvent(values) {
    // the change event needs to propagate to elements outside of the light-DOM, hence making it composed.
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: {
        value: values
      }
    }));
  }

  assertRequiredAttributes() {
    assert(!!this.label, `<lightning-dual-listbox> Missing required "label" attribute.`);
    assert(!!this.sourceLabel, `<lightning-dual-listbox> Missing required "sourceLabel" attribute.`);
    assert(!!this.selectedLabel, `<lightning-dual-listbox> Missing required "selectedLabel" attribute.`);
    assert(!!this.options, `<lightning-dual-listbox> Missing required "options" attribute.`);
  }

  swapOptions(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  getElementsOfList(listId) {
    const elements = this.template.querySelectorAll(`div[data-type='${listId}']`);
    return elements ? elements : [];
  }

  selectKeyboardInterface() {
    const that = this;
    that.shiftIndex = -1;
    that.lastShift = null;
    return {
      getShiftIndex() {
        return that.shiftIndex;
      },

      setShiftIndex(value) {
        that.shiftIndex = value;
      },

      getLastShift() {
        return that.lastShift;
      },

      setLastShift(value) {
        that.lastShift = value;
      },

      getElementsOfList(listId) {
        return that.getElementsOfList(listId);
      },

      selectAllOptions(option) {
        that.selectAllFromLastSelectedToOption(option, true);
      },

      updateSelectedOptions(option, select, isMultiple) {
        that.updateSelectedOptions(option, select, isMultiple);
      },

      moveOptionsBetweenLists(addToSelect) {
        that.moveOptionsBetweenLists(addToSelect, true);
      }

    };
  }

  getOptionIndex(optionElement) {
    return parseInt(optionElement.getAttribute('data-index'), 10);
  }

  getListId(optionElement) {
    return getRealDOMId(optionElement.parentElement.parentElement);
  }

  updateFocusableOption(listId, value) {
    if (listId === this.computedSourceListId) {
      this.focusableInSource = value;
    } else if (listId === this.computedSelectedListId) {
      this.focusableInSelected = value;
    }

    this.optionToFocus = value;
  }

  isNumber(value) {
    return value !== '' && value !== null && isFinite(value);
  }
  /**
   * If the new value is different than internal selected values,
   * we need to un-highlight the already highlighted options
   *
   * @param newValue
   */


  updateHighlightedOptions(newValue) {
    let isSame = false;

    if (newValue && newValue.length && this._selectedValues && this._selectedValues.length) {
      isSame = newValue.length === this._selectedValues.length && newValue.every(option => this._selectedValues.includes(option));
    }

    if (!isSame) {
      this.highlightedOptions = [];
      this.highlightedOptionsLabel = [];
    }
  }

  movedOptions(addToSelect) {
    const listName = addToSelect ? this.selectedLabel : this.sourceLabel;

    for (let i = 0; i < this.highlightedOptions.length; i++) {
      let selectedOption = addToSelect ? this.computedSourceList.filter(item => item.value === this.highlightedOptions[i]) : this.computedSelectedList.filter(item => item.value === this.highlightedOptions[i]);
      this.highlightedOptionsLabel.push(selectedOption[0].label);
    }

    if (this.highlightedOptions.length) {
      const strToFormat = this.highlightedOptions.length > 1 ? i18n.movedOptionsPlural : i18n.movedOptionsSingular;
      this._messageToDisplay = formatLabel(strToFormat, this.highlightedOptionsLabel.join(', '), listName);
    } else {
      this._messageToDisplay = '';
    }
  }

}

_registerDecorators(LightningDualListbox, {
  publicProps: {
    sourceLabel: {
      config: 0
    },
    selectedLabel: {
      config: 0
    },
    label: {
      config: 0
    },
    options: {
      config: 0
    },
    min: {
      config: 0
    },
    max: {
      config: 0
    },
    name: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    messageWhenRangeOverflow: {
      config: 3
    },
    messageWhenRangeUnderflow: {
      config: 3
    },
    disabled: {
      config: 3
    },
    required: {
      config: 3
    },
    value: {
      config: 3
    },
    requiredOptions: {
      config: 3
    },
    variant: {
      config: 3
    },
    size: {
      config: 3
    },
    fieldLevelHelp: {
      config: 0
    },
    disableReordering: {
      config: 3
    },
    showActivityIndicator: {
      config: 3
    },
    validity: {
      config: 1
    },
    addButtonLabel: {
      config: 3
    },
    removeButtonLabel: {
      config: 3
    },
    upButtonLabel: {
      config: 3
    },
    downButtonLabel: {
      config: 3
    }
  },
  publicMethods: ["focus", "checkValidity", "reportValidity", "setCustomValidity", "showHelpMessageIfInvalid"],
  track: {
    _showActivityIndicator: 1,
    _requiredOptions: 1,
    _selectedValues: 1,
    _variant: 1,
    _disabled: 1,
    _disableReordering: 1,
    _required: 1,
    _addButtonLabel: 1,
    _removeButtonLabel: 1,
    _upButtonLabel: 1,
    _downButtonLabel: 1,
    _size: 1,
    errorMessage: 1,
    highlightedOptions: 1,
    focusableInSource: 1,
    focusableInSelected: 1,
    highlightedOptionsLabel: 1
  },
  fields: ["_messageToDisplay", "isFocusOnList"]
});

export default _registerComponent(LightningDualListbox, {
  tmpl: _tmpl
});