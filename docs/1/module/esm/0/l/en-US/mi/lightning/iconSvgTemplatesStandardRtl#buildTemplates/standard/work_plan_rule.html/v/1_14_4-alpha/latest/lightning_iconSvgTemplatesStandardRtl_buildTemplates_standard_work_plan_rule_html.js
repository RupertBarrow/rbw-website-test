import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl#buildTemplates%2Fstandard%2Fwork_plan_rule.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_work_plan_rule_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl#buildTemplates%2Fstandard%2Fwork_plan_rule.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_work_plan_rule_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M62.4 30.1v-4a5.91 5.91 0 00-5.8-6H43a6 6 0 00-5.8 6v4a2 2 0 002 2h21.4a1.74 1.74 0 001.8-2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M22.7 31.2v42.6a5.91 5.91 0 005.8 6h42.9a6 6 0 005.8-6V31.2a5.91 5.91 0 00-5.8-6h-2a.94.94 0 00-1 1v4a7.9 7.9 0 01-7.8 7.9H39.3a7.9 7.9 0 01-7.8-7.9v-4a.94.94 0 00-1-1h-2a5.79 5.79 0 00-5.8 6zm8.5 30.6c0-.7.8-.9 1.4-.4l3.6 3.6 6.2-6.1-6.2-6.2-3.6 3.5c-.5.7-1.3.4-1.3-.3V44.8a1.49 1.49 0 011.2-1.2h11.1c.7 0 .9.8.4 1.4l-3.6 3.6 6.9 7h20.2a1.08 1.08 0 011 1v4.5a1.07 1.07 0 01-1 1H47.3l-7 7 3.6 3.8c.7.5.4 1.3-.3 1.3H32.4a1.49 1.49 0 01-1.2-1.2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_work_plan_rule"
}
