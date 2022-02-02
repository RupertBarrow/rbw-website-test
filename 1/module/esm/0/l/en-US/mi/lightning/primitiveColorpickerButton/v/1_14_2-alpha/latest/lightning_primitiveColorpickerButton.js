import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_3/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning%2FprimitiveColorpickerButton%23primitiveColorpickerButton.html%2Fv%2F1_14_2-alpha/latest/lightning_primitiveColorpickerButton_primitiveColorpickerButton_html.js";
import labelA11yTriggerText from '/1/module/esm/0/l/en-US/mi/%40salesforce%2Flabel%2FLightningColorPicker.a11yTriggerText%2Fv%2F1_14_2-alpha/latest/@salesforce_label_LightningColorPicker_a11yTriggerText.js';
import { Direction, AutoPosition } from '/1/module/esm/0/l/en-US/mi/lightning%2FpositionLibrary%2Fv%2F1_14_2-alpha/latest/lightning_positionLibrary.js';
import { normalizeBoolean } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_2-alpha/latest/lightning_utilsPrivate.js';
const i18n = {
  a11yTriggerText: labelA11yTriggerText
};

class PrimitiveColorpickerButton extends LightningElement {
  constructor(...args) {
    super(...args);
    this._isColorPickerPanelOpen = false;
    this._value = '';
    this._disabled = false;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }
  /**
   * If present, the input field is disabled and users cannot interact with it.
   * @type {boolean}
   * @default false
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }

  focus() {
    const button = this.template.querySelector('button');
    return button && button.focus();
  }

  blur() {
    const button = this.template.querySelector('button');
    return button && button.blur();
  }

  get colorInputStyle() {
    return `background: ${this.value || '#5679C0'};`;
  }

  handleColorPickerToggleClick(event) {
    event.preventDefault();
    this._isColorPickerPanelOpen = !this._isColorPickerPanelOpen;

    if (this._isColorPickerPanelOpen) {
      this.startColorPickerPositioning();
    } else {
      this.stopColorPickerPositioning();
    }
  }

  startColorPickerPositioning() {
    if (!this._autoPosition) {
      this._autoPosition = new AutoPosition(this);
    }

    this._autoPosition.start({
      target: () => this.template.querySelector('button.slds-color-picker__summary-button'),
      element: () => this.template.querySelector('lightning-color-picker-panel').shadowRoot.querySelector('section'),
      align: {
        horizontal: Direction.Left,
        vertical: Direction.Top
      },
      targetAlign: {
        horizontal: Direction.Left,
        vertical: Direction.Bottom
      },
      autoFlip: true
    });
  }

  stopColorPickerPositioning() {
    if (this._autoPosition) {
      this._autoPosition.stop();
    }
  }

  handleUpdateColorEvent(event) {
    event.stopPropagation();
    const detail = event.detail;
    this._isColorPickerPanelOpen = false;
    this.stopColorPickerPositioning();
    this.dispatchEvent(new CustomEvent('change', {
      detail
    }));
  }

  get i18n() {
    return i18n;
  }

}

PrimitiveColorpickerButton.delegatesFocus = true;

_registerDecorators(PrimitiveColorpickerButton, {
  publicProps: {
    value: {
      config: 3
    },
    disabled: {
      config: 3
    }
  },
  publicMethods: ["focus", "blur"],
  track: {
    _isColorPickerPanelOpen: 1,
    _value: 1,
    _disabled: 1
  }
});

export default _registerComponent(PrimitiveColorpickerButton, {
  tmpl: _tmpl
});