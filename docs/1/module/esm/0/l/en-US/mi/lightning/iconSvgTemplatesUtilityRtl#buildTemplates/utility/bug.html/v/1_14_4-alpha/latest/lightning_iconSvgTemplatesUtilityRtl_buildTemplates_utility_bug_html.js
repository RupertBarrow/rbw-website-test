import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fbug.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_bug_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fbug.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_bug_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M19.6 10h12.8a1.51 1.51 0 001.43-1.75A8 8 0 0026 2a8.05 8.05 0 00-7.83 6.24A1.51 1.51 0 0019.6 10z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M47.59 30.8A2.4 2.4 0 0050 28.24 2.47 2.47 0 0047.43 26h-7v-4c4.64-1.84 7.91-6.8 8-12.71a2.48 2.48 0 00-2-2.48 2.39 2.39 0 00-2.8 2.4 9.14 9.14 0 01-3.92 7.83 4.87 4.87 0 00-4.08-2.24H16.41a4.87 4.87 0 00-4.08 2.24 9 9 0 01-3.92-7.66 2.53 2.53 0 00-2.24-2.56 2.39 2.39 0 00-2.55 2.4c0 5.91 3.35 11 8 12.79v4h-7A2.53 2.53 0 002 28.24a2.44 2.44 0 002.41 2.56h7.2v4C7 36.64 3.7 41.59 3.62 47.51a2.48 2.48 0 002 2.48 2.39 2.39 0 002.8-2.4 9 9 0 013.84-7.76 14.4 14.4 0 009.27 9.44 1.61 1.61 0 002.08-1.52V28.56A2.53 2.53 0 0125.84 26a2.44 2.44 0 012.56 2.4v19.35a1.58 1.58 0 002.08 1.52 14.4 14.4 0 009.27-9.44 9.25 9.25 0 013.84 7.6A2.53 2.53 0 0045.83 50a2.4 2.4 0 002.56-2.4c0-5.92-3.36-11-8-12.79v-4z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_bug"
}
