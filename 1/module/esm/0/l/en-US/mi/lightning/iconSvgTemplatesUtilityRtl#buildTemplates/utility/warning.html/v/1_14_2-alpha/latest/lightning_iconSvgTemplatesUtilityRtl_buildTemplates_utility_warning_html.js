import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/warning.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_warning_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/warning.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_warning_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_3/latest/lwc.js";
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
      "d": "M51.4 42.5l-22.9-37c-1.2-2-3.8-2-5 0L.6 42.5C-.8 44.8.6 48 3.1 48h45.8c2.5 0 4-3.2 2.5-5.5zM26 40c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm3-9c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V18c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v13z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_warning"
