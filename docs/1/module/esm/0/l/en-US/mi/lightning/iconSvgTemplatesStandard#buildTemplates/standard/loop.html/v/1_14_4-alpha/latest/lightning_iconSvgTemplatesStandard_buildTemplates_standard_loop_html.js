import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Floop.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_loop_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Floop.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_loop_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M76.5 58.3c0 .1 0 .2-.1.2-.3 1.1-.7 2.2-1.1 3.3-.5 1.2-1 2.3-1.6 3.4-1.2 2.2-2.7 4.2-4.5 6-1.7 1.8-3.7 3.4-5.9 4.7-2.2 1.3-4.5 2.3-7 3-2.5.7-5.1 1.1-7.7 1.1C32.8 80 20 67.2 20 51.3s12.8-28.6 28.6-28.6c5.3 0 10.3 1.5 14.6 4h.1c2.1 1.2 4 2.7 5.6 4.4.5.4.8.7 1.2 1.2.9.8 1.6.3 1.6-.9V22c0-1.1.9-2 2-2h4c1.1 0 2 .9 2.2 2v24.5c0 .9-.8 1.8-1.8 1.8H53.6c-1.1 0-1.9-.8-1.9-1.9v-4.2c0-1.1.9-2 2-2h9.4c.8 0 1.4-.2 1.7-.7-3.6-5-9.6-8.3-16.2-8.3-11.1 0-20.1 9-20.1 20.1s9 20.1 20.1 20.1c8.7 0 16.1-5.5 18.9-13.3 0 0 .3-1.8 1.7-1.8h5.7c.8 0 1.6.6 1.6 1.5v.5z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_loop"
}
