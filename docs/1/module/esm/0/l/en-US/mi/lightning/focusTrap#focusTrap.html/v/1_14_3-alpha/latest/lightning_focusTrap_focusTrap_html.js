import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FfocusTrap#focusTrap.css%2Fv%2F1_14_3-alpha/latest/lightning_focusTrap_focusTrap_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FfocusTrap#focusTrap.scoped.css?scoped=true%2Fv%2F1_14_3-alpha/latest/lightning_focusTrap_focusTrap_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, h: api_element, s: api_slot} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("div", {
    attrs: {
      "tabindex": api_tab_index($cmp._bookendTabIndex),
      "data-start": ""
    },
    key: 0,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp._focusLastElement))
    }
  }, []), api_slot("", {
    key: 1,
    on: {
      "focusin": _m1 || ($ctx._m1 = api_bind($cmp._handleFocusIn)),
      "focusout": _m2 || ($ctx._m2 = api_bind($cmp._handleFocusOut))
    }
  }, [], $slotset), api_element("div", {
    attrs: {
      "tabindex": api_tab_index($cmp._bookendTabIndex),
      "data-end": ""
    },
    key: 2,
    on: {
      "focus": _m3 || ($ctx._m3 = api_bind($cmp._focusFirstElement))
    }
  }, [])];
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-focusTrap_focusTrap"
