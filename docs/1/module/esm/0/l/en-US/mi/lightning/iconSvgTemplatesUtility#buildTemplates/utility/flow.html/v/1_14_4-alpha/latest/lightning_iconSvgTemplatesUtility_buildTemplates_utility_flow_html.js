import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fflow.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_flow_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fflow.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_flow_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.9 10.6c-2.1-4.1-7.4-11.7-17.2-7.2-6.1 2.8-9.5 4.4-9.5 4.4l-8.8 3.8c-2.5 1.2-7.9-.5-11-1.6-.9-.3-1.7.6-1.3 1.5 2.1 4.1 7.4 11.7 17.2 7.2 6.1-2.8 18.3-8.1 18.3-8.1 2.5-1.2 7.9.5 11 1.6.9.2 1.7-.7 1.3-1.6zM28.8 23.4c-1.1.6-5.5 2.6-5.5 2.6l-4.4 1.9c-2.2 1.2-6.9-.4-9.7-1.5-.8-.4-1.5.6-1.1 1.4 1.8 4 6.5 11.2 15.1 6.8 5.4-2.7 9.9-4.5 9.9-4.5 2.2-1.2 6.9.4 9.7 1.5.8.3 1.5-.6 1.1-1.5-1.8-3.9-6.5-11.1-15.1-6.7zm-3.2 17.7c-.9.5-2.4 1.4-2.4 1.4-1.7 1.1-5.2-.3-7.3-1.3-.6-.3-1.1.6-.8 1.4 1.3 3.6 4.8 10.1 11.3 6.1 2.4-1.5 2.4-1.4 2.4-1.4 1.8-.9 5.2.3 7.3 1.3.6.3 1.1-.6.8-1.4-1.3-3.6-4.6-9.8-11.3-6.1z"
  },
  key: 2,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_flow"
}
