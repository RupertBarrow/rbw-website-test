import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/brush.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_brush_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/brush.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_brush_scoped_css?scoped=true.js";

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
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M49.4 2.7C46-.8 27 10 15.4 28.6c-.5.9-.2 2 .7 2.4 2.6 1.2 4.7 3.4 5.8 6.1.4 1 1.5 1.3 2.4.7 18-11.9 28.5-31.6 25.1-35.1zM11.9 35.2C10.4 35.2 9 36 8 37h-.1c-.5 0-1 .8-1.4 1.5-1.6 2.7-1.9 5.9-4.3 9.4-.4.6-.3 1.5.4 1.7 3.4 1.1 9.5.1 12.5-2.1v.1c1-.2.7-.6 1-.6 1.1-2 2-3 2-4.9-.1-3.7-2.7-6.9-6.2-6.9z"
    },
    key: 3,
    svg: true
  }, [])])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_brush"
