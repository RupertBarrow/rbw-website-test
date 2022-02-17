import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fnumber_input.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_number_input_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fnumber_input.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_number_input_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74 80H26c-3.3 0-6-2.7-6-6V26c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6v48c0 3.3-2.7 6-6 6zM28.1 30v40c0 1.1.9 2 2 2H70c1.1 0 2-.9 2-2V30c0-1.1-.9-2-2-2H30.1c-1.1 0-2 .9-2 2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M63 42.8h-3.7l1.6-6.1v-.1c0-.2-.2-.5-.5-.5h-2.9c-.2 0-.4.2-.5.4l-1.6 6.3H48l1.6-6.1v-.1c0-.2-.2-.5-.5-.5h-2.9c-.2 0-.4.2-.5.4l-1.6 6.3H40c-.2 0-.4.1-.5.3l-.7 2.8v.1c0 .2.2.5.5.5h3.9l-1.8 7.1h-4c-.2 0-.4.1-.5.3l-.7 2.8v.1c0 .2.2.5.5.5h3.7l-1.6 6.2v.1c0 .2.2.5.5.5h2.9c.2 0 .4-.1.5-.4l1.6-6.4h7.3l-1.6 6v.1c0 .2.2.5.5.5h2.9c.2 0 .4-.1.5-.4l1.6-6.4h4.1c.2 0 .4-.1.5-.4l.7-2.8v-.1c0-.2-.2-.5-.5-.5h-3.8l1.8-7.1h3.9c.2 0 .4-.1.5-.4l.7-2.8c.1-.1-.1-.2-.4-.2zM52.7 53.6h-7.4l1.8-7.1h7.3l-1.7 7.1z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_number_input"
}
