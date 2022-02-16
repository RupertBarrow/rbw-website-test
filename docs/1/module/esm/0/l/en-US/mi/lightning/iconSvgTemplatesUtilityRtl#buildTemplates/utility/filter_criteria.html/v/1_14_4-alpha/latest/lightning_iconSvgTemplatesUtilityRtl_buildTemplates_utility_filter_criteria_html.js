import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Ffilter_criteria.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_filter_criteria_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Ffilter_criteria.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_filter_criteria_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M16.35 10.4h18.89A1.74 1.74 0 0037 8.67V5.2A5.22 5.22 0 0031.77 0h-12a5.22 5.22 0 00-5.2 5.2v3.47a1.87 1.87 0 001.78 1.73z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M8.55 4.33a.82.82 0 01.86.87v3.47a6.94 6.94 0 006.85 6.93h18.89A6.88 6.88 0 0042 8.67V5.2a.82.82 0 01.87-.87h1.73a5.22 5.22 0 015.2 5.2V46.8a5.22 5.22 0 01-5.2 5.2H6.81a5.2 5.2 0 01-5.11-5.2V9.53a5.2 5.2 0 015.11-5.2h1.74zm27 19.94h-19.2a.75.75 0 00-.61 1.21l8.41 9.88a2 2 0 01.43 1.13v6.24a.75.75 0 00.69.69h1.3a.67.67 0 00.61-.69v-6.24a1.39 1.39 0 01.52-1.13l8.49-9.88a.73.73 0 00-.6-1.21z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_filter_criteria"
}
