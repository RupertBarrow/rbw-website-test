import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/lookupAddress#lookupAddress.css/v/1_14_3-alpha/latest/lightning_lookupAddress_lookupAddress_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/lookupAddress#lookupAddress.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_lookupAddress_lookupAddress_scoped_css?scoped=true.js";

import _lightningBaseCombobox from "/1/module/esm/0/l/en-US/mi/lightning/baseCombobox/v/1_14_3-alpha/latest/lightning_baseCombobox.js";
import _lightningPrimitiveIframe from "/1/module/esm/0/l/en-US/mi/lightning/primitiveIframe/v/1_14_3-alpha/latest/lightning_primitiveIframe.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, b: api_bind, c: api_custom_element} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [$cmp._isLoaded ? api_element("label", {
    className: $cmp.computedLabelClass,
    key: 0
  }, [api_text(api_dynamic_text($cmp.label))]) : null, $cmp._isLoaded ? api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 1
  }, [api_custom_element("lightning-base-combobox", _lightningBaseCombobox, {
    className: $cmp.computedLookupComboboxClass,
    props: {
      "variant": "lookup",
      "items": $cmp._items,
      "disabled": $cmp.disabled,
      "dropdownAlignment": "auto",
      "placeholder": $cmp.placeholder,
      "inputText": $cmp.inputText,
      "inputIconName": $cmp._inputIconName,
      "showInputActivityIndicator": $cmp.showActivityIndicator,
      "attributionLogoUrl": $cmp._googleLogoUrl,
      "attributionLogoAssistiveText": $cmp._googleLogoText
    },
    key: 2,
    on: {
      "textinput": _m0 || ($ctx._m0 = api_bind($cmp.handleTextInput)),
      "select": _m1 || ($ctx._m1 = api_bind($cmp.handleSelect)),
      "ready": _m2 || ($ctx._m2 = api_bind($cmp.handleComboboxReady))
    }
  }, [])]) : null, api_custom_element("lightning-primitive-iframe", _lightningPrimitiveIframe, {
    styleDecls: [["display", "none", false]],
    props: {
      "src": $cmp.apiSrc,
      "domain": $cmp.apiDomain
    },
    key: 3,
    on: {
      "iframeload": _m3 || ($ctx._m3 = api_bind($cmp.handleIframeLoad))
    }
  }, [])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-lookupAddress_lookupAddress"
