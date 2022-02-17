import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fcanvas.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_canvas_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fcanvas.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_canvas_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73.9 65.9c-.2 3.4-.6 7.1-1.2 10.6-.2 1.1-1.2 2.1-2.3 2.2-6.8.9-13.6 1.3-20.4 1.3-6.7 0-13.5-.4-20.2-1.3-1.1-.1-2.1-1.2-2.3-2.2-1-5.6-1.5-11.3-1.5-16.9 0-5.7.5-11.4 1.4-16.9.2-1.1 1.2-2.1 2.3-2.3 4.1-.5 8.2-.8 12.2-1 0 0 3.3-.2 3.1-3.2-.2-2.8-5-4.6-5-9.4 0-3.8 3.8-6.8 9.9-6.8 6.1 0 9.9 3.1 9.9 6.8 0 4.7-4.7 6.6-4.9 9.4-.2 3.1 3 3.2 3 3.2 4.1.2 8.3.5 12.4 1 1.1.2 2.1 1.2 2.3 2.3.7 3.9 1.1 7.4 1.3 11.2.1 1.1-.9 2-2.1 2-.4 0-.7-.1-1.1-.1-1.2 0-2.9-.7-3.7-1.6 0 0-2.7-2.7-5.5-2.7-4.6-.1-8.2 4.1-8.2 8.5s3.5 8.6 8.1 8.5c2.8-.1 5.5-2.9 5.5-2.9.9-.8 2.5-1.6 3.7-1.6.4-.1.7-.1 1.1-.1 1.4.1 2.3 1 2.2 2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_canvas"
}
