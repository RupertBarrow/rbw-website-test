import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning/colorPickerPanel#colorPickerPanel.html/v/1_14_4-alpha/latest/lightning_colorPickerPanel_colorPickerPanel_html.js";
import labelCancelButton from '/1/module/esm/0/l/en-US/mi/@salesforce/label/LightningColorPicker.cancelButton/v/1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_cancelButton.js';
import labelCustomTab from '/1/module/esm/0/l/en-US/mi/@salesforce/label/LightningColorPickerPanel.customTab/v/1_14_4-alpha/latest/@salesforce_label_LightningColorPickerPanel_customTab.js';
import labelDefaultTab from '/1/module/esm/0/l/en-US/mi/@salesforce/label/LightningColorPickerPanel.defaultTab/v/1_14_4-alpha/latest/@salesforce_label_LightningColorPickerPanel_defaultTab.js';
import labelDoneButton from '/1/module/esm/0/l/en-US/mi/@salesforce/label/LightningColorPicker.doneButton/v/1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_doneButton.js';
import { classSet } from '/1/module/esm/0/l/en-US/mi/lightning/utils/v/1_14_4-alpha/latest/lightning_utils.js';
import { keyCodes } from '/1/module/esm/0/l/en-US/mi/lightning/utilsPrivate/v/1_14_4-alpha/latest/lightning_utilsPrivate.js';
const i18n = {
  cancelButton: labelCancelButton,
  customTab: labelCustomTab,
  defaultTab: labelDefaultTab,
  doneButton: labelDoneButton
};
const DEFAULT_COLOR = '#000000';

class LightningColorPickerPanel extends LightningElement {
  constructor(...args) {
    super(...args);
    this.currentColor = void 0;
    this._isCustomTabActive = false;
    this._selectedColor = null;
  }

  connectedCallback() {
    this._selectedColor = this.currentColor || DEFAULT_COLOR;
  }

  get i18n() {
    return i18n;
  }

  get computedClassDefault() {
    return classSet({
      'slds-tabs_default__item': true,
      'slds-is-active': !this._isCustomTabActive
    }).toString();
  }

  get computedClassCustom() {
    return classSet({
      'slds-tabs_default__item': true,
      'slds-is-active': this._isCustomTabActive
    }).toString();
  }

  get ariaSelectedDefault() {
    return !this._isCustomTabActive.toString();
  }

  get ariaSelectedCustom() {
    return this._isCustomTabActive.toString();
  }

  handleTabChange(event) {
    event.preventDefault();
    const tabElement = event.currentTarget;

    if (tabElement.classList.contains('slds-is-active')) {
      return;
    }

    this._isCustomTabActive = tabElement.title !== i18n.defaultTab;
  }

  handleUpdateSelectedColor(event) {
    this._selectedColor = event.detail.color;
  }

  dispatchUpdateColorEventWithColor(color) {
    this.dispatchEvent( // eslint-disable-next-line lightning-global/no-custom-event-bubbling
    new CustomEvent('updatecolor', {
      composed: true,
      bubbles: true,
      detail: {
        color
      }
    }));
  }

  handleDoneClick() {
    this.dispatchUpdateColorEventWithColor(this._selectedColor);
  }

  handleCancelClick() {
    this.dispatchUpdateColorEventWithColor(this.currentColor);
  }

  handleKeydown(event) {
    if (event.keyCode === keyCodes.escape) {
      event.preventDefault();
      this.dispatchUpdateColorEventWithColor(this.currentColor);
    } else if (event.shiftKey && event.keyCode === keyCodes.tab && event.srcElement.dataset.id === 'color-anchor') {
      event.preventDefault();
      this.template.querySelector('button[name="done"]').focus();
    } else if (!event.shiftKey && event.keyCode === keyCodes.tab && event.srcElement.name === 'done') {
      event.preventDefault();
      this.template.querySelector('lightning-color-picker-custom').focus();
    }
  }

}

_registerDecorators(LightningColorPickerPanel, {
  publicProps: {
    currentColor: {
      config: 0
    }
  },
  track: {
    _isCustomTabActive: 1,
    _selectedColor: 1
  }
});

export default _registerComponent(LightningColorPickerPanel, {
  tmpl: _tmpl
});