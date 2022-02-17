import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/buttonIcon#buttonIcon.css/v/1_14_4-alpha/latest/lightning_buttonIcon_buttonIcon_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/buttonIcon#buttonIcon.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_buttonIcon_buttonIcon_scoped_css?scoped=true.js";

import _lightningPrimitiveIcon from "/1/module/esm/0/l/en-US/mi/lightning/primitiveIcon/v/1_14_4-alpha/latest/lightning_primitiveIcon.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "disabled": $cmp.disabled ? "" : null,
      "name": $cmp.name,
      "title": $cmp.computedTitle,
      "accesskey": $cmp.computedAccessKey,
      "type": $cmp.normalizedType,
      "value": $cmp.value,
      "aria-label": $cmp.computedAriaLabel,
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-live": $cmp.computedAriaLive,
      "aria-atomic": $cmp.computedAriaAtomic,
      "aria-haspopup": $cmp.computedAriaHasPopup
    },
    key: 0,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleFocus)),
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleBlur))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.iconName,
      "svgClass": $cmp.computedIconClass,
      "variant": "bare"
    },
    key: 1
  }), $cmp.alternativeText ? api_element("span", stc0, [api_text(api_dynamic_text($cmp.alternativeText))]) : null])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "lightning-buttonIcon_buttonIcon"
}
