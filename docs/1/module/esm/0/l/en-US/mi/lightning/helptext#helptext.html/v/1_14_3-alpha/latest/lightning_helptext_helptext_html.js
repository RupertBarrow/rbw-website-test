import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/helptext#helptext.css/v/1_14_3-alpha/latest/lightning_helptext_helptext_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/helptext#helptext.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_helptext_helptext_scoped_css?scoped=true.js";

import _lightningPrimitiveIcon from "/1/module/esm/0/l/en-US/mi/lightning/primitiveIcon/v/1_14_3-alpha/latest/lightning_primitiveIcon.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
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
