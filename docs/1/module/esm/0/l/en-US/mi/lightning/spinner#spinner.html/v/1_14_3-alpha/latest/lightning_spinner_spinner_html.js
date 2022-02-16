import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fspinner%23spinner.css%2Fv%2F1_14_3-alpha/latest/lightning_spinner_spinner_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fspinner%23spinner.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_3-alpha/latest/lightning_spinner_spinner_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", {
    className: $cmp.computedClass,
    attrs: {
      "role": "status"
    },
    key: 0
  }, [$cmp.validAlternativeText ? api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    key: 1
  }, [api_text(api_dynamic_text($cmp.alternativeText))]) : null, api_element("div", {
    classMap: {
      "slds-spinner__dot-a": true
    },
    key: 2
  }, []), api_element("div", {
    classMap: {
      "slds-spinner__dot-b": true
    },
    key: 3
  }, [])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-spinner_spinner"
