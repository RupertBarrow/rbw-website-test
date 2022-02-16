import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fremove_link.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_remove_link_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fremove_link.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_remove_link_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M24 36.6c-.6 0-1.2-.1-1.8-.3-.6-.1-1.3-.3-1.9-.5-.4-.1-.8 0-1 .2l-.4.4c-2.5 2.5-6.6 2.8-9.3.5-2.9-2.6-3.1-7.1-.3-9.8l6.6-6.6c.9-.9 1.9-1.4 3-1.7 1.4-.4 2.9-.3 4.2.3.8.3 1.6.8 2.2 1.5.3.3.6.7.9 1.2.3.6 1.1.7 1.6.2l2.5-2.5c.4-.4.4-.9.1-1.3-.4-.5-.8-.9-1.2-1.4-.6-.6-1.4-1.2-2.1-1.7-1.3-.8-2.6-1.3-4.1-1.6-2.7-.5-5.6-.1-8.2 1.3-1 .5-1.9 1.2-2.7 2l-6.4 6.4c-4.6 4.6-5 12.1-.5 16.9 4.7 5 12.6 5.2 17.4.3l2.2-2.2c.5-.5.1-1.5-.8-1.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M40.5 22.5c4.8-4.8 4.7-12.7-.3-17.4C35.4.7 27.9 1 23.3 5.6l-2 2c-.6.6-.2 1.6.6 1.7 1.2.1 2.5.3 3.7.7.4.1.8 0 1-.2l.4-.4c2.5-2.5 6.6-2.8 9.3-.5 2.9 2.6 3.1 7.1.3 9.8L30 25.3c-.9.9-1.9 1.4-3 1.7-1.4.4-2.9.3-4.2-.3-.8-.3-1.6-.8-2.2-1.5-.3-.3-.6-.7-.8-1.1-.3-.6-1.1-.7-1.6-.2l-2.4 2.4c-.4.4-.4.9-.1 1.3.4.5.7.9 1.2 1.4.7.7 1.4 1.2 2.1 1.7 1.3.8 2.6 1.3 4.1 1.6 2.7.5 5.6.1 8.2-1.3 1-.5 1.9-1.2 2.7-2l6.5-6.5zM45.1 41l4.6-4.6c.4-.4.4-1 0-1.4l-2.8-2.8c-.4-.4-1-.4-1.4 0L41 36.9l-4.3-4.3c-.4-.4-1-.4-1.4 0l-2.8 2.8c-.4.4-.4 1 0 1.4l4.3 4.3-4.2 4.2c-.4.4-.4 1 0 1.4l2.8 2.8c.4.4 1 .4 1.4 0l4.2-4.2 4.5 4.5c.4.4 1 .4 1.4 0l2.8-2.8c.4-.4.4-1 0-1.4L45.1 41z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_remove_link"
}
