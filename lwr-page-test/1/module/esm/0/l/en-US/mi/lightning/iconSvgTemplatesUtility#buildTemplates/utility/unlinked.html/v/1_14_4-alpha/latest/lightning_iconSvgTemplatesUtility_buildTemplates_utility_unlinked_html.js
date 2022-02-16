import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Funlinked.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_unlinked_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Funlinked.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_unlinked_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M18.1 36.9l9.4-9.5.7-.7 8.4-8.4 3.7-3.7 4.1-4.1c.7-.6.8-1.5.3-2l-1.8-1.8c-.4-.4-1.1-.4-1.7-.1L6.7 40.9v.1c-.6.6-.7 1.5-.3 2l1.8 1.8c.5.5 1.4.4 2-.3l4-4c0 .1 3.9-3.6 3.9-3.6zM18.4 23.1c-.5 0-.8.4-1 .8-.1.6-.1 1.2-.1 1.8 0 .4 0 .8.1 1.2l3.8-3.8h-2.8z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M8.3 36l4-4c-2.8-.6-5-3-5.2-5.8-.3-3.8 2.8-6.9 6.5-6.9h9.1c.7 0 1.4.1 2.1.4l3.9-3.9c-.9-.5-1.8-1-2.7-1.2-1-.3-2.2-.5-3.2-.5h-8.7c-6.6-.1-12 4.8-12.2 11.1C1.7 29.9 4.3 34 8.3 36zM43.1 15.3l-4 4c2.9.5 5.2 2.9 5.4 5.9.3 3.8-2.8 6.9-6.5 6.9h-9c-.8 0-1.6-.2-2.3-.4l-3.9 3.9c.9.6 1.8 1 2.8 1.3 1 .3 2.2.5 3.2.5H38c6.6.1 11.9-5.4 11.7-12-.2-4.6-2.9-8.3-6.6-10.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M30.1 28.3h3c.5 0 .8-.4 1-.8.1-.6.1-1.2.1-1.8 0-.5 0-.9-.1-1.4l-4 4z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_unlinked"
}
