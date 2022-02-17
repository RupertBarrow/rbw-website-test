import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fform.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_form_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fform.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_form_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill": "none",
    "height": "4.8",
    "rx": "1.6",
    "width": "27.2",
    "x": "12.4",
    "y": "26"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "none",
    "height": "4.8",
    "rx": "1.6",
    "width": "24",
    "x": "12.4",
    "y": "35.6"
  },
  key: 3,
  svg: true
};
const stc3 = {
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M36.4 14.8h8.48A1.09 1.09 0 0046 13.68a1 1 0 00-.32-.8L35.12 2.32a1 1 0 00-.8-.32 1.09 1.09 0 00-1.12 1.12v8.48a3.21 3.21 0 003.2 3.2z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M44.4 19.6H33.2a4.81 4.81 0 01-4.8-4.8V3.6A1.6 1.6 0 0026.8 2h-16A4.81 4.81 0 006 6.8v38.4a4.81 4.81 0 004.8 4.8h30.4a4.81 4.81 0 004.8-4.8v-24a1.6 1.6 0 00-1.6-1.6zm-32-1.6a1.62 1.62 0 011.6-1.55h6.55A1.56 1.56 0 0122.12 18v1.59a1.63 1.63 0 01-1.59 1.58H14a1.55 1.55 0 01-1.58-1.58zm24 20.77a1.6 1.6 0 01-1.6 1.6H14a1.6 1.6 0 01-1.6-1.6V37.2a1.6 1.6 0 011.6-1.6h20.8a1.6 1.6 0 011.6 1.6zm3.2-9.6A1.6 1.6 0 0138 30.8H14a1.6 1.6 0 01-1.6-1.6v-1.6A1.6 1.6 0 0114 26h24a1.6 1.6 0 011.6 1.6z"
  },
  key: 6,
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
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("rect", stc2), api_element("g", stc3, [api_element("path", stc4), api_element("path", stc5)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_form"
}
