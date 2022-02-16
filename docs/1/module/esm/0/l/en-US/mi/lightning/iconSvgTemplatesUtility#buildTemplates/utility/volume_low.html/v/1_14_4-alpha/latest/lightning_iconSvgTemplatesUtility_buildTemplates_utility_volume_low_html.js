import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fvolume_low.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_volume_low_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fvolume_low.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_volume_low_scoped_css?scoped=true.js";

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
    "d": "M24.6 2.6L12 18H6c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h6l12.6 15.4c1.3 1.3 3.4.4 3.4-1.4V4c0-1.8-2.2-2.7-3.4-1.4zM36.3 15.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4 2.2 2 3.5 4.9 3.5 8.1s-1.4 6.1-3.6 8.1c-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0 2.9-2.7 4.8-6.6 4.8-11 0-4.2-1.8-8.1-4.7-10.8z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_volume_low"
}
