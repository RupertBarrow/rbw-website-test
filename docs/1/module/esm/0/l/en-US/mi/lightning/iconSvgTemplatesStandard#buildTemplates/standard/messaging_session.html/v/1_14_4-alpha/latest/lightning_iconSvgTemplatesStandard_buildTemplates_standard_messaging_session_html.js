import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fmessaging_session.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_messaging_session_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fmessaging_session.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_messaging_session_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 22c16.6 0 30 12.5 30.1 28 0 15.5-13.4 28-30 28-5.8 0-11.2-1.5-15.8-4.2-.5-.3-1.1-.4-1.7-.2l-8.8 3.1c-1.6.5-3.1-.9-2.6-2.5l2.8-8.9c.2-.5.1-1.1-.2-1.6C21.4 59.6 20 55 20 50c0-15.5 13.4-28 30-28zm13 23c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1H37c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h26zM43 65c.6 0 1-.4 1-1V52c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h6zm20 0c.6 0 1-.4 1-1V52c0-.6-.4-1-1-1H51c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_messaging_session"
}
