import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fdecision.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_decision_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fdecision.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_decision_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M79.4 28.8l-5.2-3.9c-.8-.5-1.5-.8-2.4-.8H54V22c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H26c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h45.8c.9 0 1.8-.2 2.4-.8l5.2-3.9c.8-.7.8-1.9 0-2.5zM74 46H54v-3c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v3H28.3c-.9 0-1.8.2-2.4.8l-5.2 3.9c-.9.6-.9 1.9 0 2.6l5.2 3.9c.8.5 1.5.8 2.4.8H74c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM54 71.6v-4.9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v4.9c-4 1.1-6.2 3.5-6.9 6.5-.2.9.5 1.9 1.5 1.9h18.9c1 0 1.8-.9 1.5-1.9-.7-3-3-5.3-7-6.5z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_decision"
}
