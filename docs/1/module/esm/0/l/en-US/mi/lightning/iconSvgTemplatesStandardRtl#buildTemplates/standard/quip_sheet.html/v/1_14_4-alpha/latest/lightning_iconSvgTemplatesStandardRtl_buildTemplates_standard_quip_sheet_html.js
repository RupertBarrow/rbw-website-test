import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/quip_sheet.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_quip_sheet_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/quip_sheet.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_quip_sheet_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M31.9 38.8h-10c-1 0-1.9.9-1.9 1.9v31.9c0 2.8 2.2 5 5 5h6.9c1 0 1.9-.9 1.9-1.9v-35c0-1.1-.9-1.9-1.9-1.9zm46.2 0H40.6c-1 0-1.9.9-1.9 1.9v35c0 1 .9 1.9 1.9 1.9H75c2.8 0 5-2.2 5-5v-32c0-1-.9-1.8-1.9-1.8zM75 22.5H25c-2.8 0-5 2.2-5 5v4.4c0 1 .9 1.9 1.9 1.9h56.2c1 0 1.9-.9 1.9-1.9v-4.4c0-2.7-2.2-5-5-5z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_quip_sheet"
}
