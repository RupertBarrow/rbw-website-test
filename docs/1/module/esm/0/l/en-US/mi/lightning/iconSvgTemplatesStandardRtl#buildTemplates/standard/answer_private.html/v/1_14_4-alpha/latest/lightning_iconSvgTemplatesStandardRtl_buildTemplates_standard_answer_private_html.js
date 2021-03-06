import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/answer_private.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_answer_private_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/answer_private.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_answer_private_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-opacity": ".65",
    "d": "M89 84c-1.1 0-2 .9-2 2v1h4v-1c0-1.1-.9-2-2-2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill-opacity": ".65",
    "d": "M100 100V62l-38 38h38zm-5-6.5c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h.5v-1c0-2.2 1.8-4 4-4s4 1.8 4 4v1h.5c.8 0 1.5.7 1.5 1.5v5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M49.9 22c-16.6 0-30 12.5-30 28 0 5 1.4 9.6 3.8 13.7.3.5.4 1.1.2 1.6l-2.8 8.9c-.5 1.6 1 3 2.6 2.5l8.8-3.1c.6-.2 1.2-.1 1.7.2 4.6 2.7 10 4.2 15.8 4.2 16.6 0 30-12.5 30-28-.1-15.5-13.4-28-30.1-28zm14.5 21.8L49.1 59.1c-.6.6-1.3.9-2.1.9s-1.5-.3-2.1-.9l-7.4-7.4c-.6-.6-.6-1.5 0-2.1l2.1-2.1c.6-.6 1.5-.6 2.1 0l5.3 5.3 13.2-13.2c.6-.6 1.5-.6 2.1 0l2.1 2.1c.5.6.5 1.6 0 2.1z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_answer_private"
}
