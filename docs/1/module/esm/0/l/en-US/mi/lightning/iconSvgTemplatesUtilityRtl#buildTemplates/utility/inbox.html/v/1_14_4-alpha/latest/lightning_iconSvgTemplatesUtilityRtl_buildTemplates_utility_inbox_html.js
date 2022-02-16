import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Finbox.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_inbox_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Finbox.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_inbox_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 8c0-2.2-1.8-4-4-4H6C3.8 4 2 5.8 2 8v36c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V8zM19 35c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v4zm0-10c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v4zm0-10c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v4zm25 26c0 .6-.4 1-1 1H24c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1h19c.6 0 1 .4 1 1v30z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_inbox"
}
