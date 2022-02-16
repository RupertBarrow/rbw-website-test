import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fwork_plan_rule.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_work_plan_rule_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fwork_plan_rule.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_work_plan_rule_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M39.3 32.1h21.4a2 2 0 002-2v-4a6 6 0 00-5.8-6H43.3a5.91 5.91 0 00-5.8 6v4a1.74 1.74 0 001.8 2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M71.4 25.2h-2a.94.94 0 00-1 1v4a7.9 7.9 0 01-7.8 7.9H39.3a7.9 7.9 0 01-7.8-7.9v-4a.94.94 0 00-1-1h-2a5.91 5.91 0 00-5.8 6v42.6a6 6 0 005.8 6h42.9a5.91 5.91 0 005.8-6V31.2a5.79 5.79 0 00-5.8-6zM68.7 73a1.49 1.49 0 01-1.2 1.2H56.3c-.7 0-1-.8-.3-1.3l3.6-3.8-7-7H32.4a1.07 1.07 0 01-1-1v-4.5a1.08 1.08 0 011-1h20.2l6.9-7-3.6-3.6c-.5-.6-.3-1.4.4-1.4h11.1a1.49 1.49 0 011.2 1.2v11.1c0 .7-.8 1-1.3.3l-3.6-3.5-6.2 6.2 6.2 6.1 3.6-3.6c.6-.5 1.4-.3 1.4.4z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_work_plan_rule"
}
