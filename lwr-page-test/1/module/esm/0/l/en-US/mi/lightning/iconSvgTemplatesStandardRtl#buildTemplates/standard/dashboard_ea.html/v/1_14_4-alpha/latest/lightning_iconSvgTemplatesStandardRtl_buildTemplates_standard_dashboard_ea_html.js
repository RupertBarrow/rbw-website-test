import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fdashboard_ea.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_dashboard_ea_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fdashboard_ea.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_dashboard_ea_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M22.5 19.7h20c1.4 0 2.5 1.1 2.5 2.5v54.9c0 1.4-1.1 2.5-2.5 2.5h-20c-1.4 0-2.5-1.1-2.5-2.5V22.2c0-1.4 1.1-2.5 2.5-2.5zM57.5 19.6h20c1.4 0 2.5 1.1 2.5 2.5V42c0 1.4-1.1 2.5-2.5 2.5h-20c-1.4 0-2.5-1.1-2.5-2.5V22.1c0-1.4 1.1-2.5 2.5-2.5zM57.5 54.6h20c1.4 0 2.5 1.1 2.5 2.5V77c0 1.4-1.1 2.5-2.5 2.5h-20c-1.4 0-2.5-1.1-2.5-2.5V57.1c0-1.3 1.1-2.5 2.5-2.5z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_dashboard_ea"
}
