import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fhelp_center.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_help_center_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fhelp_center.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_help_center_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M25.7 2C12.4 2.2 1.9 13.1 2 26.3 2.2 39.6 13.1 50.1 26.3 50c13.3-.2 23.8-11.1 23.7-24.3C49.8 12.4 38.9 1.9 25.7 2zm0 3.2c3.6-.1 7 .8 9.9 2.3l-3.2 5.4c-1.9-1-4.1-1.5-6.4-1.5s-4.5.5-6.4 1.5l-3.2-5.4c2.8-1.4 5.9-2.3 9.3-2.3zM12.9 32.4l-5.4 3.2c-1.4-2.8-2.3-6-2.3-9.4-.1-3.6.8-7 2.3-9.9l5.4 3.2c-1 1.9-1.5 4.1-1.5 6.4s.5 4.6 1.5 6.5zm13.4 14.4c-3.6.1-7-.8-9.9-2.3l3.2-5.4c1.9 1 4.1 1.5 6.4 1.5s4.5-.5 6.4-1.5l3.2 5.4c-2.8 1.4-5.9 2.3-9.3 2.3zm-.3-9.3c-6.4 0-11.5-5.2-11.5-11.5 0-6.4 5.2-11.5 11.5-11.5 6.4 0 11.5 5.2 11.5 11.5 0 6.4-5.1 11.5-11.5 11.5zm13.1-5.1c1-1.9 1.5-4.1 1.5-6.4s-.5-4.5-1.5-6.4l5.4-3.2c1.4 2.8 2.3 6 2.3 9.4.1 3.6-.8 7-2.3 9.9l-5.4-3.3z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_help_center"
}
