import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesActionRtl%23buildTemplates%2Faction%2Fnew_custom4.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_new_custom4_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesActionRtl%23buildTemplates%2Faction%2Fnew_custom4.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_new_custom4_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M6.6 12.2l16.9-9.5c1.5-.9 3.5-.9 5.1 0l16.9 9.5c1.5.9 2.5 2.6 2.5 4.3v19c0 1.8-.9 3.4-2.5 4.3l-16.9 9.5c-1.5.9-3.5.9-5.1 0L6.6 39.8C5.1 38.9 4 37.3 4 35.5v-19c0-1.8 1.1-3.4 2.6-4.3z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom4"
}
