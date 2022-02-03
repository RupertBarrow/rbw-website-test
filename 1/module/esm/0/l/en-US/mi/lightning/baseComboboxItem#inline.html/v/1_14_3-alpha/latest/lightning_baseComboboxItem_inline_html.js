import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/baseComboboxItem#inline.css/v/1_14_3-alpha/latest/lightning_baseComboboxItem_inline_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/baseComboboxItem#inline.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_baseComboboxItem_inline_scoped_css?scoped=true.js";

import _lightningIcon from "/1/module/esm/0/l/en-US/mi/lightning/icon/v/1_14_3-alpha/latest/lightning_icon.js";
import _lightningBaseComboboxFormattedText from "/1/module/esm/0/l/en-US/mi/lightning/baseComboboxFormattedText/v/1_14_3-alpha/latest/lightning_baseComboboxFormattedText.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, d: api_dynamic_text, t: api_text} = $api;
  return [api_element("span", {
    classMap: {
      "slds-media__figure": true,
      "slds-listbox__option-icon": true
    },
    key: 0
  }, [$cmp.item.iconName ? api_custom_element("lightning-icon", _lightningIcon, {
    props: {
      "alternativeText": $cmp.item.iconAlternativeText,
      "iconName": $cmp.item.iconName,
      "size": "x-small"
    },
    key: 1
  }, []) : null]), api_element("span", {
    classMap: {
      "slds-media__body": true
    },
    key: 2
  }, [!$cmp.textHasParts ? api_element("span", {
    classMap: {
      "slds-truncate": true
    },
    attrs: {
      "title": $cmp.item.text
    },
    key: 3
  }, [api_text(api_dynamic_text($cmp.item.text))]) : null, $cmp.textHasParts ? api_custom_element("lightning-base-combobox-formatted-text", _lightningBaseComboboxFormattedText, {
    classMap: {
      "slds-truncate": true
    },
    props: {
      "text": $cmp.item.text,
      "title": $cmp.text
    },
    key: 4
  }, []) : null])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-baseComboboxItem_inline"
