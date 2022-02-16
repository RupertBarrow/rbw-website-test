import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fnote.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_note_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fnote.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_note_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M71.3 67l-1.1 1.1C69 69.3 67.3 70 65.6 70h-3.3c-3 0-6.3-2.3-6.3-6.5v-3.1c0-2.5 1.1-4 1.8-4.8L71.3 42c.4-.4.7-1.2.7-1.7V30c0-3.3-2.7-6-6-6H34c-3.3 0-6 3-6 6h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v8h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v8h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2c0 4 2.7 6 6 6h32c3.3 0 6-2.7 6-6v-2.7c0-.6-.3-.7-.7-.3zM61 39c0 1.1-.9 2-2 2H39c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2zm-9 24c0 1.1-.9 2-2 2H39c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v2zm3-12c0 1.1-.9 2-2 2H39c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M81.4 45.6l-1.2-1.2c-.8-.8-2-.8-2.8 0L62.1 59.9c-.1 0-.1.2-.1.3v3.3c0 .3 0 .5.3.5h3.3c.1 0 .3-.1.4-.1l15.4-15.4c.8-.9.8-2.1 0-2.9z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_note"
}
