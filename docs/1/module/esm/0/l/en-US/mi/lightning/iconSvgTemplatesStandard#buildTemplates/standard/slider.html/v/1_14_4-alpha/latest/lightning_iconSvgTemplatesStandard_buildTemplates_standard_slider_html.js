import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fslider.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_slider_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fslider.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_slider_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.25 46.38h6.25a2.5 2.5 0 012.5 2.5v2.5a2.51 2.51 0 01-2.5 2.5h-6.25a1 1 0 01-1-1.26 10 10 0 00.37-2.5 11.87 11.87 0 00-.37-2.62c-.13-.75.37-1.25 1-1.12zM31 68.75h-8.5a2.51 2.51 0 00-2.5 2.5v2.5a2.51 2.51 0 002.5 2.5H31a7.5 7.5 0 100-7.5zM50.25 70a11.87 11.87 0 01.37 2.62 10 10 0 01-.37 2.5 1 1 0 001 1.26H77.5a2.51 2.51 0 002.5-2.5v-2.5a2.5 2.5 0 00-2.5-2.5H51.25c-.75-.13-1.13.37-1 1.12zm5-45a11.87 11.87 0 01.37 2.62 10 10 0 01-.37 2.5 1 1 0 001 1.26H77.5a2.51 2.51 0 002.5-2.5v-2.5a2.5 2.5 0 00-2.5-2.5H56.25c-.63-.13-1.13.37-1 1.12zM36 23.75H22.5a2.51 2.51 0 00-2.5 2.5v2.5a2.51 2.51 0 002.5 2.5H36a7.5 7.5 0 100-7.5zm15 22.5H22.5a2.51 2.51 0 00-2.5 2.5v2.5a2.51 2.51 0 002.5 2.5H51a7.5 7.5 0 100-7.5z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_slider"
}
