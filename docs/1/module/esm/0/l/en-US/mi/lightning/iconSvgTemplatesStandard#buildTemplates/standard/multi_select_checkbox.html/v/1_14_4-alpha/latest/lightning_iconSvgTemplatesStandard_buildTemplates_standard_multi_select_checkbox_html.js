import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fmulti_select_checkbox.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_multi_select_checkbox_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fmulti_select_checkbox.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_multi_select_checkbox_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73 20H41c-3.3 0-6 2.7-6 6v1c0 .6.4 1 1 1h29c3.3 0 6 2.7 6 6v31c0 .6.4 1 1 1h1c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M59 34H27c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h32c3.3 0 6-2.7 6-6V40c0-3.3-2.7-6-6-6zm-2.7 17L41 66.3c-.6.6-1.3.9-2.1.9-.7 0-1.5-.3-2.1-.9l-7.4-7.4c-.6-.6-.6-1.5 0-2.1l2.1-2.1c.6-.6 1.5-.6 2.1 0l5.3 5.3 13.2-13.2c.6-.6 1.5-.6 2.1 0l2.1 2.1c.5.6.5 1.6 0 2.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_multi_select_checkbox"
}
