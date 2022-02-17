import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Ftext_template.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_text_template_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Ftext_template.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_text_template_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M57.3 64.8h17.4c2.8 0 5-2.3 5-5V25c0-2.8-2.3-5-5-5H40c-2.8 0-5 2.3-5 5v20.7c1.6.1 3.2.8 4.3 2l2 1.9.2.2c2 2.2 2.3 5.3.9 7.7h8.4c3.5 0 6.3 2.7 6.5 6.1v1.2zm14.9-33.6c0 .7-.5 1.2-1.2 1.2h-7.5c-.7 0-1.2-.5-1.2-1.2v-3.5c0-.7.5-1.2 1.2-1.2H71c.7 0 1.2.5 1.2 1.2v3.5zm-.1 7.4v3.5c0 .7-.5 1.2-1.2 1.2H43.7c-.7 0-1.2-.5-1.2-1.2v-3.5c0-.7.5-1.2 1.2-1.2H71c.7 0 1.2.5 1.1 1.2zm-1.2 15.6H48.6c-.7 0-1.2-.5-1.2-1.2v-3.5c0-.7.5-1.2 1.2-1.2H71c.7 0 1.2.5 1.2 1.2V53c0 .8-.5 1.3-1.3 1.2zM20.5 64.3c-.5.5-.5 1.4 0 2l13.2 13.2c.5.5 1.4.5 2 0l2-2.1c.5-.5.5-1.4 0-2l-5.5-5.5c-.3-.4-.2-1.1.2-1.4.1-.1.3-.2.5-.2h17.9c.8-.2 1.4-.8 1.5-1.6v-3c-.1-.8-.7-1.4-1.5-1.4H32.9c-.6 0-1-.4-1-1 0-.3.1-.5.3-.7l5.5-5.5c.5-.5.5-1.4 0-2l-2.1-2c-.5-.6-1.4-.6-2-.1l-.1.1-13 13.2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_text_template"
}
