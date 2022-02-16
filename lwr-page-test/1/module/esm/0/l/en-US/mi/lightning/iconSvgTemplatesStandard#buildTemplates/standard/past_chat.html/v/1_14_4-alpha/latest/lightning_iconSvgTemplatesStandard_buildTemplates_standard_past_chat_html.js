import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fpast_chat.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_past_chat_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fpast_chat.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_past_chat_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.5 21.9c-16.7 0-30 12.3-30 27.4 0 4.8 1.4 9.3 3.6 13.3.4.6.5 1.4.3 2.1l-3.9 10.7c-.4 1 .6 1.9 1.6 1.6L32 72.9c.6-.3 1.4-.1 2.1.3 4.5 2.5 9.9 4 15.7 4 16.4-.2 29.8-12.3 29.8-27.6-.1-15.5-13.5-27.7-30.1-27.7zm11.7 40.5l-1.4 1.4c-.6.6-1.3.9-2.1.9s-1.5-.3-2.1-.9L46 54.2c-.7-.6-1.2-1.7-1.2-2.8v-14c0-1.7 1.3-3 3-3h2c1.7 0 3 1.3 3 3v12.4l8.4 8.4c.6.6.9 1.3.9 2.1s-.3 1.5-.9 2.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_past_chat"
}
