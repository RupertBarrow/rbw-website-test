import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/card#card.css/v/1_14_3-alpha/latest/lightning_card_card_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/card#card.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_card_card_scoped_css?scoped=true.js";

import _lightningIcon from "/1/module/esm/0/l/en-US/mi/lightning/icon/v/1_14_3-alpha/latest/lightning_icon.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, d: api_dynamic_text, t: api_text, s: api_slot} = $api;
  return [api_element("article", {
    className: $cmp.computedWrapperClassNames,
    key: 0
  }, [api_element("div", {
    classMap: {
      "slds-card__header": true,
      "slds-grid": true
    },
    key: 1
  }, [api_element("header", {
    classMap: {
      "slds-media": true,
      "slds-media_center": true,
      "slds-has-flexi-truncate": true
    },
    key: 2
  }, [$cmp.hasIcon ? api_element("div", {
    classMap: {
      "slds-media__figure": true
    },
    key: 3
  }, [api_custom_element("lightning-icon", _lightningIcon, {
    props: {
      "iconName": $cmp.iconName,
      "size": "small"
    },
    key: 4
  }, [])]) : null, api_element("div", {
    classMap: {
      "slds-media__body": true
    },
    key: 5
  }, [$cmp.hasTitle ? api_element("h2", {
    classMap: {
      "slds-card__header-title": true
    },
    attrs: {
      "aria-level": $cmp.privateHeadingAriaLevel
    },
    key: 6
  }, [api_element("span", {
    classMap: {
      "slds-text-heading_small": true,
      "slds-truncate": true
    },
    key: 7
  }, [$cmp.hasStringTitle ? api_text(api_dynamic_text($cmp.title)) : null, !$cmp.hasStringTitle ? api_slot("title", {
    attrs: {
      "name": "title"
    },
    key: 8
  }, [], $slotset) : null])]) : null, !$cmp.hasTitle ? api_slot("title", {
    classMap: {
      "slds-hide": true
    },
    attrs: {
      "name": "title"
    },
    key: 9
  }, [], $slotset) : null]), api_element("div", {
    classMap: {
      "slds-no-flex": true
    },
    key: 10
  }, [api_slot("actions", {
    attrs: {
      "name": "actions"
    },
    key: 11
  }, [], $slotset)])])]), api_element("div", {
    classMap: {
      "slds-card__body": true
    },
    key: 12
  }, [api_slot("", {
    key: 13
  }, [], $slotset)]), $cmp.showFooter ? api_element("div", {
    classMap: {
      "slds-card__footer": true
    },
    key: 14
  }, [api_slot("footer", {
    attrs: {
      "name": "footer"
    },
    key: 15
  }, [], $slotset)]) : null, !$cmp.showFooter ? api_slot("footer", {
    classMap: {
      "slds-hide": true
    },
    attrs: {
      "name": "footer"
    },
    key: 16
  }, [], $slotset) : null])];
}
export default registerTemplate(tmpl);
tmpl.slots = ["", "actions", "footer", "title"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-card_card"
