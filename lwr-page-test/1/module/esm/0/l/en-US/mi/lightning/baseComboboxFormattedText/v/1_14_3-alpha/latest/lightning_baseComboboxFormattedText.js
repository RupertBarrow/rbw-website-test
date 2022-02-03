import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning/baseComboboxFormattedText#baseComboboxFormattedText.html/v/1_14_3-alpha/latest/lightning_baseComboboxFormattedText_baseComboboxFormattedText_html.js";

class LightningBaseComboboxFormattedText extends LightningElement {
  constructor(...args) {
    super(...args);
    this._text = '';
    this.hasParts = void 0;
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this.hasParts = Array.isArray(value) && value.length > 0;

    if (this.hasParts) {
      // Generate keys for LWC DOM
      this._text = value.map((part, i) => ({
        part,
        key: i
      }));
    } else {
      this._text = value;
    }
  }

}

_registerDecorators(LightningBaseComboboxFormattedText, {
  publicProps: {
    text: {
      config: 3
    }
  },
  track: {
    _text: 1,
    hasParts: 1
  }
});

export default _registerComponent(LightningBaseComboboxFormattedText, {
  tmpl: _tmpl
});