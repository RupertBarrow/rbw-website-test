import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl#buildTemplates%2Fstandard%2Fentity.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_entity_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl#buildTemplates%2Fstandard%2Fentity.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_entity_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74.4 28.7c0-4.8-10.9-8.7-24.4-8.7s-24.4 3.9-24.4 8.7v3c0 4.8 10.9 8.7 24.4 8.7s24.4-3.9 24.4-8.7v-3zm-48.8 10c0 3.8 10.9 6.8 24.4 6.8s24.4-3 24.4-6.8v6.2c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.9-24.4-8.7v-6.2zm0 0c0 3.8 10.9 6.8 24.4 6.8s24.4-3 24.4-6.8v6.2c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.9-24.4-8.7v-6.2zm0 13.2c0 3.8 10.9 6.8 24.4 6.8s24.4-3 24.4-6.8V58c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.8-24.4-8.5v-6.3zm0 13.3c0 3.8 11 6.8 24.4 6.8s24.4-3 24.4-6.8v6.2c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.9-24.4-8.7v-6.2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_entity"
}
