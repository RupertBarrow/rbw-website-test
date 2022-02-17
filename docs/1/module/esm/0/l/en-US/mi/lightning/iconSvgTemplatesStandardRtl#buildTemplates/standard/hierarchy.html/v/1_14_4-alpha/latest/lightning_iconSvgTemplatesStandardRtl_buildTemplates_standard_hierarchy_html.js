import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fhierarchy.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_hierarchy_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fhierarchy.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_hierarchy_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.25 46.251H29.404c-.999 0-1.875.875-1.875 1.875V62.5h-5.654c-1 0-1.875.875-1.875 1.875v13.75c0 1 .875 1.875 1.875 1.875h18.75c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875h-5.642v-8.749h30.035V62.5h-5.613c-1.001 0-1.875.875-1.875 1.875v13.75c0 1 .874 1.875 1.875 1.875h18.75c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875H72.49V48.126c0-1-.874-1.875-1.875-1.875H53.75V37.5h5.61c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875H40.61c-1.001 0-1.875.875-1.875 1.875v13.75c0 1 .874 1.875 1.875 1.875h5.64v8.751z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_hierarchy"
}
