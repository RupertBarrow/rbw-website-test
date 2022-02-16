import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Freply_all.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_reply_all_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Freply_all.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_reply_all_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M24.4 18.1s-1.1-1.1-.5-1.7l5.6-5.6c.6-.6.6-1.5 0-2.1l-2.1-2.2c-.6-.6-1.5-.6-2.1 0L11.8 20c-.6.6-.6 1.5 0 2.1l13.5 13.5c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1L24 25.8c-.6-.6-.2-1.5.5-1.7 11.1.4 20.1 9.3 20.8 20.6 0 .8.7 1.4 1.5 1.4h3c.9 0 1.4-.7 1.3-1.6-.7-14.5-11.7-25.9-26.7-26.4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M5.4 20.4L17 8.8c.6-.6.6-1.5 0-2.1l-.1-.2c-.6-.6-1.5-.6-2.1 0L1.3 20c-.6.6-.6 1.5 0 2.1l13.5 13.5c.6.6 1.5.6 2.1 0l.1-.1c.6-.6.6-1.5 0-2.1L5.5 21.8s-.7-.6-.1-1.4z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_reply_all"
}
