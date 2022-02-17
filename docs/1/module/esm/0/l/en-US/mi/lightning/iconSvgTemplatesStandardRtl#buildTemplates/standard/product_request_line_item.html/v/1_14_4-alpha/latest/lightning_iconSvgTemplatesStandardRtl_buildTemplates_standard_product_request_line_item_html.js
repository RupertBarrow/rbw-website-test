import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fproduct_request_line_item.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_product_request_line_item_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fproduct_request_line_item.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_product_request_line_item_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M20 75.1v-4.7c0-1.2 1.1-2.2 2.3-2.2h37c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2h-37c-1.3 0-2.3-1.1-2.2-2.3zm52.8 2.3c-1.2-.1-2.1-1.1-2-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h4.7c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2H72.8zm2.8-28.9c.5.9.6 2.9-.3 3.3l-1.7 1.6c-.9.4-2.7.2-3.2-.6-5-8.3-17.7-12.5-26-8.4l-1.7.8c-.3.1-.5.4-.6.7-.2.7.1 1.4.8 1.6l9 3.6c1 .3 1.5 1.4 1.2 2.4L52 57c0 .1-.1.2-.1.3-.4.8-1.3 1.2-2.1.8l-22-8.6c-1-.3-1.5-1.4-1.2-2.4l6.8-22.7c0-.1.1-.2.1-.3.4-.8 1.3-1.2 2.1-.8l3.4 1.3c.9.4 1.5 1.4 1.2 2.4l-2.8 9.4c-.3 1 .7 2.1 1.7 1.6l2.9-1.3c10.7-5.2 26.8.1 33.6 11.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_product_request_line_item"
}
