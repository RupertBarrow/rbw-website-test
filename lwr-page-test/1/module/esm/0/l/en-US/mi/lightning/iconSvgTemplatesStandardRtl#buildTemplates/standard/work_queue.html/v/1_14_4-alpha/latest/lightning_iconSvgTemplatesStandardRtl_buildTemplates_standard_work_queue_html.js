import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fwork_queue.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_work_queue_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fwork_queue.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_work_queue_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M51.8 71.8c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h25.9c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-26-.1zm0-35.8c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h25.9c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-26-.1zM41.2 63.8l.2-.2c.6-.7.6-1.9-.2-2.6l-4.8-4.8c-.3-.2-.4-.6-.4-.9 0-.7.6-1.3 1.3-1.3h40.4c1.1-.1 2-.9 2.1-2v-4c0-1.1-1-2-2.1-2H37.5c-.3 0-.7-.2-.9-.4-.5-.5-.5-1.4 0-1.9l4.8-4.8.2-.2c.6-.7.6-1.9-.2-2.6l-2.8-2.8-.2-.2c-.7-.6-1.9-.6-2.6.2L20.5 48.6l-.2.2c-.6.7-.6 1.9.2 2.6l15.3 15.2c.7.7 1.9.7 2.6 0l2.8-2.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_work_queue"
}
