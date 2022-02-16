import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fdayview.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_dayview_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fdayview.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_dayview_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44 7h-5V5c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v2H19V5c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v2H8c-2.2 0-4 1.8-4 4v2.5c0 .8.7 1.5 1.5 1.5h41c.8 0 1.5-.7 1.5-1.5V11c0-2.2-1.8-4-4-4zM46.5 20h-41c-.8 0-1.5.7-1.5 1.5V46c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V21.5c0-.8-.7-1.5-1.5-1.5zM29 42v.2c0 .8-1 1.8-2 1.8s-2-1-2-2V32l-1.5 1.6c-.3.3-.6.4-1 .4-.8 0-1.5-.7-1.5-1.5 0-.4.2-.8.5-1.1l3.9-3.9c.4-.4.9-.6 1.5-.6 1.1 0 2.1.9 2.1 2V42z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_dayview"
}
