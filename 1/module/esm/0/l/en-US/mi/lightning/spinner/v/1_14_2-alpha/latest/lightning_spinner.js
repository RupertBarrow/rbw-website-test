import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_3/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning%2Fspinner%23spinner.html%2Fv%2F1_14_2-alpha/latest/lightning_spinner_spinner_html.js";
import { classSet } from '/1/module/esm/0/l/en-US/mi/lightning%2Futils%2Fv%2F1_14_2-alpha/latest/lightning_utils.js';
import { normalizeString as normalize } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_2-alpha/latest/lightning_utilsPrivate.js';
/**
 * Displays an animated spinner.
 */

class LightningSpinner extends LightningElement {
  constructor(...args) {
    super(...args);
    this.alternativeText = void 0;
    this.size = 'medium';
    this.variant = void 0;
  }

  connectedCallback() {
    this.classList.add('slds-spinner_container');
    this.template.addEventListener('mousewheel', this.stopScrolling);
    this.template.addEventListener('touchmove', this.stopScrolling);
  }

  get normalizedVariant() {
    return normalize(this.variant, {
      fallbackValue: 'base',
      validValues: ['base', 'brand', 'inverse']
    });
  }

  get normalizedSize() {
    return normalize(this.size, {
      fallbackValue: 'medium',
      validValues: ['small', 'medium', 'large']
    });
  }

  get computedClass() {
    const {
      normalizedVariant,
      normalizedSize
    } = this;
    const classes = classSet('slds-spinner'); // add variant-specific class

    if (normalizedVariant !== 'base') {
      classes.add(`slds-spinner_${normalizedVariant}`);
    } // add size-specific class


    classes.add(`slds-spinner_${normalizedSize}`);
    return classes.toString();
  } // alternativeText validation


  get validAlternativeText() {
    const hasAlternativeText = !!this.alternativeText; // if we have an empty value output a console warning

    if (!hasAlternativeText) {
      // eslint-disable-next-line no-console
      console.warn(`<lightning-spinner> The alternativeText attribute should not be empty. Please add a description of what is causing the wait.`);
    }

    return hasAlternativeText;
  } // prevent scrolling


  stopScrolling(event) {
    event.preventDefault();
  }

}

_registerDecorators(LightningSpinner, {
  publicProps: {
    alternativeText: {
      config: 0
    },
    size: {
      config: 0
    },
    variant: {
      config: 0
    }
  }
});

export default _registerComponent(LightningSpinner, {
  tmpl: _tmpl
});