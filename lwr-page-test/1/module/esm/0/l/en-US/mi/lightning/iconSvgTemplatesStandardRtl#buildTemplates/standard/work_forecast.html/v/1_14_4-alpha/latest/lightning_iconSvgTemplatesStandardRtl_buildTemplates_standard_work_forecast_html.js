import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fwork_forecast.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_work_forecast_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fwork_forecast.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_work_forecast_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M77.7 29.2S74.2 22 66.4 22s-11.5 7.4-11.5 7.4a11.67 11.67 0 00-9.9 0S41.4 22 33.6 22s-11.3 7.2-11.3 7.2-7.3 16.3-7.5 30.9C14.6 74.5 24.3 78 28.9 78c5 0 16.8-2.1 16.2-18.5a4.78 4.78 0 014.5-2.7 5.94 5.94 0 015.4 2.7C54.4 75.9 66.2 78 71.1 78c4.5 0 14.3-3.5 14.1-17.9-.2-14.6-7.5-30.9-7.5-30.9zM29.8 71.6a8.7 8.7 0 118.7-8.7 8.71 8.71 0 01-8.7 8.7zm40.4 0a8.7 8.7 0 118.7-8.7 8.71 8.71 0 01-8.7 8.7z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_work_forecast"
}
