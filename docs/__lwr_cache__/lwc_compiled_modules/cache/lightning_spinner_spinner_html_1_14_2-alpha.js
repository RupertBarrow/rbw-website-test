import _implicitStylesheets from "./spinner.css";

import _implicitScopedStylesheets from "./spinner.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
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
