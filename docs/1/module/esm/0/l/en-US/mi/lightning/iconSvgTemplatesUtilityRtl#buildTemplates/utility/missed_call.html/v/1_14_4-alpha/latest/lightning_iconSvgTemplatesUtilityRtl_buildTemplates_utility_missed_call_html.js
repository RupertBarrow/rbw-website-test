import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fmissed_call.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_missed_call_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fmissed_call.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_missed_call_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M34.7 40.3c.7 0 1.2.5 1.4 1.1l.8 5.4c.2 1.5 1.4 2.6 2.9 2.8l6.5.7c2 .2 3.7-1.3 3.7-3.3v-6.2c0-1-.4-1.8-1.1-2.5-6.4-5.8-14.9-8.8-23-8.8s-16.6 3-23 8.8c-.6.6-.9 1.6-.9 2.5V47c-.2 2 1.5 3.6 3.5 3.3l6.5-.7c1.5-.2 2.7-1.3 2.9-2.8l.8-5.4c.1-.7.7-1.1 1.4-1.1 0 0 8.4-.7 17.6 0zM39.7 12.6c.5-.5 1.4-.1 1.4.6v6.7c0 .7.5 1.2 1.2 1.2h2.5c.7 0 1.2-.5 1.2-1.2l.1-16.1c0-.7-.5-1.2-1.2-1.2h-16c-.7 0-1.2.5-1.2 1.2v2.5c0 .7.5 1.2 1.2 1.2h6.7c.7 0 1.1.9.6 1.4l-9.4 9.4c-.3.3-.9.3-1.3 0L10.1 3c-.5-.5-1.3-.5-1.8 0L6.4 4.8c-.5.5-.5 1.3 0 1.9l18.8 18.9c.5.6 1.3.6 1.9 0l12.6-13z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_missed_call"
}
