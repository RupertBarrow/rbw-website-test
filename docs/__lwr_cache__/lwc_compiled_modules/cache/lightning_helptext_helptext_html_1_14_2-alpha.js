import _implicitStylesheets from "./helptext.css";

import _implicitScopedStylesheets from "./helptext.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", {
    classMap: {
      "slds-form-element__icon": true
    },
    key: 0
  }, [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "type": "button"
    },
    key: 1
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "svgClass": "slds-button__icon",
      "iconName": $cmp.iconName,
      "variant": "bare"
    },
    key: 2
  }, []), api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    key: 3
  }, [api_text(api_dynamic_text($cmp.alternativeText))])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-helptext_helptext"
