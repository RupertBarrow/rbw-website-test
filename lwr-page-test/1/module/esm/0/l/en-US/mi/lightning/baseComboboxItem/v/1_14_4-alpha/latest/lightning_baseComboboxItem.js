import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning%2FbaseComboboxItem%23baseComboboxItem.html%2Fv%2F1_14_4-alpha/latest/lightning_baseComboboxItem_baseComboboxItem_html.js";
import card from '/1/module/esm/0/l/en-US/mi/lightning%2FbaseComboboxItem%23card.html%2Fv%2F1_14_4-alpha/latest/lightning_baseComboboxItem_card_html.js';
import inline from '/1/module/esm/0/l/en-US/mi/lightning%2FbaseComboboxItem%23inline.html%2Fv%2F1_14_4-alpha/latest/lightning_baseComboboxItem_inline_html.js';

class LightningBaseComboboxItem extends LightningElement {
  constructor(...args) {
    super(...args);
    this.item = {};
  }

  connectedCallback() {
    // We want to make sure that the item has 'aria-selected' if it's selectable
    if (this.item.selectable) {
      this.setAttribute('aria-selected', 'false');
    }

    if (this.item.type === 'option-inline') {
      this.classList.add('slds-media_small', 'slds-listbox__option_plain');
    } else {
      this.classList.add('slds-listbox__option_entity');
    }
  }

  get textHasParts() {
    const text = this.item.text;
    return text && Array.isArray(text) && text.length > 0;
  }

  get subTextHasParts() {
    const subText = this.item.subText;
    return subText && Array.isArray(subText) && subText.length > 0;
  } // Return html based on the specified item type


  render() {
    if (this.item.type === 'option-card') {
      return card;
    }

    return inline;
  }

  highlight() {
    this.toggleHighlight(true);
  }

  removeHighlight() {
    this.toggleHighlight(false);
  }

  toggleHighlight(highlighted) {
    if (this.item.selectable) {
      this.setAttribute('aria-selected', highlighted ? 'true' : 'false');
      this.classList.toggle('slds-has-focus', highlighted);
    }
  } // Parts are needed for highlighting


  partsToText(parts) {
    if (parts && Array.isArray(parts) && parts.length > 0) {
      return parts.map(part => part.text).join('');
    }

    return parts;
  }

  get rightIconSize() {
    return this.item.rightIconSize || 'small';
  }

  get iconSize() {
    return this.item.iconSize || 'small';
  }

  get text() {
    return this.partsToText(this.item.text);
  }

  get subText() {
    return this.partsToText(this.item.subText);
  }

  get hasSubText() {
    const subText = this.item.subText;
    return subText && subText.length > 0;
  }

}

_registerDecorators(LightningBaseComboboxItem, {
  publicProps: {
    item: {
      config: 0
    }
  },
  publicMethods: ["highlight", "removeHighlight"]
});

export default _registerComponent(LightningBaseComboboxItem, {
  tmpl: _tmpl
});