import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FbaseComboboxItem%23card.css%2Fv%2F1_14_3-alpha/latest/lightning_baseComboboxItem_card_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FbaseComboboxItem%23card.scoped.css?scoped=true%2Fv%2F1_14_3-alpha/latest/lightning_baseComboboxItem_card_scoped_css?scoped=true.js";

import _lightningIcon from "/1/module/esm/0/l/en-US/mi/lightning%2Ficon%2Fv%2F1_14_3-alpha/latest/lightning_icon.js";
import _lightningBaseComboboxFormattedText from "/1/module/esm/0/l/en-US/mi/lightning%2FbaseComboboxFormattedText%2Fv%2F1_14_3-alpha/latest/lightning_baseComboboxFormattedText.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
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
      "size": $cmp.iconSize,
      "alternativeText": $cmp.item.iconAlternativeText,
      "iconName": $cmp.item.iconName
    },
    key: 1
  }, []) : null]), api_element("span", {
    classMap: {
      "slds-media__body": true
    },
    key: 2
  }, [api_element("span", {
    classMap: {
      "slds-listbox__option-text": true,
      "slds-listbox__option-text_entity": true
    },
    key: 3
  }, [!$cmp.textHasParts ? api_element("span", {
    classMap: {
      "slds-truncate": true
    },
    attrs: {
      "title": $cmp.item.text
    },
    key: 4
  }, [api_text(api_dynamic_text($cmp.item.text))]) : null, $cmp.textHasParts ? api_custom_element("lightning-base-combobox-formatted-text", _lightningBaseComboboxFormattedText, {
    classMap: {
      "slds-truncate": true
    },
    props: {
      "title": $cmp.text,
      "text": $cmp.item.text
    },
    key: 5
  }, []) : null]), $cmp.hasSubText ? api_element("span", {
    classMap: {
      "slds-listbox__option-meta": true,
      "slds-listbox__option-meta_entity": true
    },
    key: 6
  }, [!$cmp.subTextHasParts ? api_element("span", {
    classMap: {
      "slds-truncate": true
    },
    attrs: {
      "title": $cmp.item.subText
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.item.subText))]) : null, $cmp.subTextHasParts ? api_custom_element("lightning-base-combobox-formatted-text", _lightningBaseComboboxFormattedText, {
    classMap: {
      "slds-truncate": true
    },
    props: {
      "title": $cmp.subText,
      "text": $cmp.item.subText
    },
    key: 8
  }, []) : null]) : null]), $cmp.item.rightIconName ? api_element("span", {
    classMap: {
      "slds-media__figure": true,
      "slds-media__figure_reverse": true
    },
    key: 9
  }, [api_custom_element("lightning-icon", _lightningIcon, {
    props: {
      "size": $cmp.rightIconSize,
      "alternativeText": $cmp.item.rightIconAlternativeText,
      "iconName": $cmp.item.rightIconName
    },
    key: 10
  }, [])]) : null];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-baseComboboxItem_card"
