import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_3/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning/button#button.html/v/1_14_2-alpha/latest/lightning_button_button_html.js";
import { classSet } from '/1/module/esm/0/l/en-US/mi/lightning/utils/v/1_14_2-alpha/latest/lightning_utils.js';
import { normalizeString as normalize } from '/1/module/esm/0/l/en-US/mi/lightning/utilsPrivate/v/1_14_2-alpha/latest/lightning_utilsPrivate.js';
import LightningPrimitiveButton from '/1/module/esm/0/l/en-US/mi/lightning/primitiveButton/v/1_14_2-alpha/latest/lightning_primitiveButton.js';
import template from '/1/module/esm/0/l/en-US/mi/lightning/button#button.html/v/1_14_2-alpha/latest/lightning_button_button_html.js';
/**
 * A clickable element used to perform an action.
 */

class LightningButton extends LightningPrimitiveButton {
  constructor(...args) {
    super(...args);
    this.name = void 0;
    this.value = void 0;
    this.label = void 0;
    this.variant = 'neutral';
    this.iconName = void 0;
    this.iconPosition = 'left';
    this.type = 'button';
    this.disableAnimation = void 0;
    this.title = null;
  }

  render() {
    return template;
  }

  get computedButtonClass() {
    const classes = classSet(super.computedButtonClass);
    return classes.add({
      'slds-button_neutral': this.normalizedVariant === 'neutral',
      'slds-button_brand': this.normalizedVariant === 'brand',
      'slds-button_outline-brand': this.normalizedVariant === 'brand-outline',
      'slds-button_destructive': this.normalizedVariant === 'destructive',
      'slds-button_text-destructive': this.normalizedVariant === 'destructive-text',
      'slds-button_inverse': this.normalizedVariant === 'inverse',
      'slds-button_success': this.normalizedVariant === 'success'
    }).toString();
  }

  get computedTitle() {
    return this.title;
  }

  get normalizedVariant() {
    return normalize(this.variant, {
      fallbackValue: 'neutral',
      validValues: ['base', 'neutral', 'brand', 'brand-outline', 'destructive', 'destructive-text', 'inverse', 'success']
    });
  }

  get normalizedType() {
    return normalize(this.type, {
      fallbackValue: 'button',
      validValues: ['button', 'reset', 'submit']
    });
  }

  get normalizedIconPosition() {
    return normalize(this.iconPosition, {
      fallbackValue: 'left',
      validValues: ['left', 'right']
    });
  }

  get showIconLeft() {
    return this.iconName && this.normalizedIconPosition === 'left';
  }

  get showIconRight() {
    return this.iconName && this.normalizedIconPosition === 'right';
  }

  get computedIconClass() {
    return classSet('slds-button__icon').add({
      'slds-button__icon_left': this.normalizedIconPosition === 'left',
      'slds-button__icon_right': this.normalizedIconPosition === 'right'
    }).toString();
  }

  handleButtonFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }

  handleButtonBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  /**
   * Sets focus on the button.
   */


  focus() {
    if (this._connected) {
      this.button.focus();
    }
  }
  /**
   * Simulates a mouse click on the button.
   */


  click() {
    if (this._connected) {
      this.button.click();
    }
  }
  /**
   * Once we are connected, we fire a register event so the button-group (or other) component can register
   * the buttons.
   */


  connectedCallback() {
    this._connected = true;
  }

  get button() {
    return this.template.querySelector('button');
  }

  renderedCallback() {
    // initialize aria attributes in primitiveButton
    super.renderedCallback(); // button is inherit from primitiveButton, button.css not working in this case.
    // change host style to disable pointer event.

    this.template.host.style.pointerEvents = this.disabled ? 'none' : '';
  }

  disconnectedCallback() {
    this._connected = false;
  }

}

LightningButton.delegatesFocus = true;

_registerDecorators(LightningButton, {
  publicProps: {
    name: {
      config: 0
    },
    value: {
      config: 0
    },
    label: {
      config: 0
    },
    variant: {
      config: 0
    },
    iconName: {
      config: 0
    },
    iconPosition: {
      config: 0
    },
    type: {
      config: 0
    },
    disableAnimation: {
      config: 0
    }
  },
  publicMethods: ["focus", "click"],
  track: {
    title: 1
  }
});

export default _registerComponent(LightningButton, {
  tmpl: _tmpl
});
LightningButton.interopMap = {
  exposeNativeEvent: {
    click: true,
    focus: true,
    blur: true
  }
};