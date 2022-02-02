import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fbutton%23button.css%2Fv%2F1_14_3-alpha/latest/lightning_button_button_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fbutton%23button.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_3-alpha/latest/lightning_button_button_scoped_css?scoped=true.js";

import _lightningPrimitiveIcon from "/1/module/esm/0/l/en-US/mi/lightning%2FprimitiveIcon%2Fv%2F1_14_3-alpha/latest/lightning_primitiveIcon.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "disabled": $cmp.disabled ? "" : null,
      "name": $cmp.name,
      "accesskey": $cmp.computedAccessKey,
      "title": $cmp.computedTitle,
      "type": $cmp.normalizedType,
      "value": $cmp.value,
      "aria-label": $cmp.computedAriaLabel,
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-haspopup": $cmp.computedAriaHasPopup,
      "aria-live": $cmp.computedAriaLive,
      "aria-atomic": $cmp.computedAriaAtomic
    },
    key: 0,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleButtonFocus)),
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleButtonBlur))
    }
  }, [$cmp.showIconLeft ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.iconName,
      "svgClass": $cmp.computedIconClass,
      "variant": "bare"
    },
    key: 1
  }, []) : null, api_text(api_dynamic_text($cmp.label)), $cmp.showIconRight ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.iconName,
      "svgClass": $cmp.computedIconClass,
      "variant": "bare"
    },
    key: 2
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
tmpl.stylesheetToken = "lightning-button_button"
