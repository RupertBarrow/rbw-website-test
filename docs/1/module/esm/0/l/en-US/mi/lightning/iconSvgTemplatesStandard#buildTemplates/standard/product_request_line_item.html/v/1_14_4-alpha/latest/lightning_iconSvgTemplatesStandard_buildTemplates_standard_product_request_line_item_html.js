import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fproduct_request_line_item.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_product_request_line_item_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fproduct_request_line_item.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_product_request_line_item_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M77.8 77.4h-37c-1.2 0-2.3-1-2.3-2.2V70.5c0-1.2 1-2.3 2.2-2.3h37c1.2 0 2.3 1 2.3 2.2V75.1c.1 1.2-.9 2.3-2.2 2.3zM26.9 77.4h-4.6c-1.2 0-2.3-1-2.3-2.2V70.5c0-1.2 1-2.3 2.2-2.3H26.9c1.2 0 2.3 1 2.3 2.2V75.1c.1 1.2-.8 2.2-2 2.3h-.3zM24.4 48.5c6.8-11.7 22.9-17 33.6-11.8l2.9 1.3c1 .5 2-.6 1.7-1.6L59.8 27c-.3-1 .3-2 1.2-2.4l3.4-1.3c.8-.4 1.7 0 2.1.8 0 .1.1.2.1.3l6.8 22.7c.3 1-.2 2.1-1.2 2.4l-22 8.6c-.8.4-1.7 0-2.1-.8 0-.1-.1-.2-.1-.3l-1.1-3.5c-.3-1 .2-2.1 1.2-2.4l9-3.6c.7-.2 1-.9.8-1.6-.1-.3-.3-.6-.6-.7l-1.7-.8c-8.3-4.1-21 .1-26 8.4-.5.8-2.3 1-3.2.6l-1.7-1.6c-.9-.4-.8-2.4-.3-3.3z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_product_request_line_item"
}
