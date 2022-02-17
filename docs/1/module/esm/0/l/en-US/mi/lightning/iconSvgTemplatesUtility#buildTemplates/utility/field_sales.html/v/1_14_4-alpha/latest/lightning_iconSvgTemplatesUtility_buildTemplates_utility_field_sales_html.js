import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/field_sales.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_field_sales_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/field_sales.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_field_sales_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26 2A19 19 0 007 21.08c0 13.19 13.61 25.27 17.8 28.47a2 2 0 002.5 0C31.49 46.25 45 34.27 45 21.08A19 19 0 0026 2zm0 33.57A14.59 14.59 0 1140.59 21 14.63 14.63 0 0126 35.57z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M20.38 12.59a4.05 4.05 0 104.07 4.05 4.05 4.05 0 00-4.07-4.05zm0 6.18a2.13 2.13 0 112.13-2.13 2.13 2.13 0 01-2.13 2.13zM22.22 29.71a.39.39 0 01-.27.17h-1.29a.35.35 0 01-.3-.17.3.3 0 010-.34l9.35-17.12a.34.34 0 01.27-.17h1.39a.34.34 0 01.16.46zM31.6 21.3a4.06 4.06 0 104.07 4.05 4.06 4.06 0 00-4.07-4.05zm0 6.18a2.12 2.12 0 112.13-2.11 2.12 2.12 0 01-2.13 2.11z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_field_sales"
}
