import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/undeprecate.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_undeprecate_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/undeprecate.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_undeprecate_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M48 7H4c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h16.2c1 5.7 5.9 10 11.8 10s10.9-4.3 11.8-10H48c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM30.5 41.3l-5.9-5.9 2.8-2.8 3.1 3.1 7.1-7.1 2.8 2.8-9.9 9.9zM46 33h-2.2c-1-5.7-5.9-10-11.8-10s-10.9 4.3-11.8 10H6V11h40v22z"
    },
    key: 2,
    svg: true
  }, [])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_undeprecate"
