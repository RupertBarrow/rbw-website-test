import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fdataset.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_dataset_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fdataset.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_dataset_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M52 20.6l23.4 11.5c1.6.8 2.6 2.4 2.6 4.1V63c0 1.8-1 3.4-2.6 4.1L52 78.6c-1.3.6-2.8.6-4.1 0L24.6 67.1C23 66.3 22 64.7 22 63V36.2c0-1.8 1-3.4 2.6-4.1L48 20.6c1.2-.6 2.8-.6 4 0z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_dataset"
}
