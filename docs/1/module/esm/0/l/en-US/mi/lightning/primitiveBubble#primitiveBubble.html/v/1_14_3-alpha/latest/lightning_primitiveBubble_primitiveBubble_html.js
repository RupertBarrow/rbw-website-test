import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/primitiveBubble#primitiveBubble.css/v/1_14_3-alpha/latest/lightning_primitiveBubble_primitiveBubble_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/primitiveBubble#primitiveBubble.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_primitiveBubble_primitiveBubble_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", {
    classMap: {
      "slds-popover__body": true
    },
    context: {
      lwc: {
        dom: "manual"
      }
    },
    key: 0,
    on: {
      "mouseleave": _m0 || ($ctx._m0 = api_bind($cmp.handleMouseLeave))
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
tmpl.stylesheetToken = "lightning-primitiveBubble_primitiveBubble"
