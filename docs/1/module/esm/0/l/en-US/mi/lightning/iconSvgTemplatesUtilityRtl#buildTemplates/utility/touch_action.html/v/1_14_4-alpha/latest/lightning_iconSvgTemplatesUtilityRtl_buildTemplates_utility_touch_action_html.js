import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Ftouch_action.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_touch_action_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Ftouch_action.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_touch_action_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.8 29.8L29.6 27c-.6-.2-1.1-.8-1.1-1.5V14.6c0-1.7-1.4-3-3.1-3h-.3c-1.7 0-3.1 1.4-3.1 3v21.5c0 1.8-2.3 2.6-3.3 1l-2.1-4.4c-1.1-1.9-3.6-2.4-5.4-1.1l-1.3 1 6.9 16.3c.3.7 1 1.1 1.8 1.1h18.1c.9 0 1.6-.6 1.8-1.4l3.2-11.4c.8-3.2-1-6.3-3.9-7.4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M17.2 23v-8.2-.4c.2-4.1 3.5-7.4 7.6-7.6h.8c4.1.2 7.4 3.5 7.6 7.6V23c0 .7.9 1 1.4.6 2.2-2.3 3.5-5.4 3.5-8.7 0-7.4-6.4-13.4-14-12.7-5.8.6-10.6 5-11.5 10.7-.6 4 .6 7.9 3.3 10.7.4.4 1.3.1 1.3-.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_touch_action"
}
