import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fspinner%23spinner.css%2Fv%2F1_14_4-alpha/latest/lightning_spinner_spinner_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fspinner%23spinner.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_spinner_spinner_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  "role": "status"
};
const stc1 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-spinner__dot-a": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-spinner__dot-b": true
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", {
    className: $cmp.computedClass,
    attrs: stc0,
    key: 0
  }, [$cmp.validAlternativeText ? api_element("span", stc1, [api_text(api_dynamic_text($cmp.alternativeText))]) : null, api_element("div", stc2), api_element("div", stc3)])];
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
  tmpl.stylesheetToken = "lightning-spinner_spinner"
}
