import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/products.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_products_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/products.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_products_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M31.9 39.5h6a1.42 1.42 0 001.5-1.5V14a1.42 1.42 0 00-1.5-1.5h-6a1.42 1.42 0 00-1.5 1.5v24a1.42 1.42 0 001.5 1.5zM45.4 39.5h3a1.42 1.42 0 001.5-1.5V14a1.42 1.42 0 00-1.5-1.5h-3a1.42 1.42 0 00-1.5 1.5v24a1.42 1.42 0 001.5 1.5zM25 39.5a1.37 1.37 0 001.5-1.5V14a1.42 1.42 0 00-1.5-1.5 1.42 1.42 0 00-1.5 1.5v24a1.37 1.37 0 001.5 1.5zM16.6 39.5H18a1.42 1.42 0 001.5-1.5V14a1.42 1.42 0 00-1.5-1.5h-1.5A1.42 1.42 0 0015 14v24a1.45 1.45 0 001.6 1.5zM3.6 39.5h6a1.42 1.42 0 001.5-1.5V14a1.42 1.42 0 00-1.5-1.5h-6A1.42 1.42 0 002.1 14v24a1.47 1.47 0 001.5 1.5z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_products"
}
