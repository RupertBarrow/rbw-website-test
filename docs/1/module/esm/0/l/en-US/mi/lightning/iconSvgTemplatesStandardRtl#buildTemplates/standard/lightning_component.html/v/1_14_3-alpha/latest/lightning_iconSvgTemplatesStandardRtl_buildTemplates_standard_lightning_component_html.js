import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/lightning_component.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_lightning_component_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/lightning_component.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_lightning_component_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M61.1 20H44.2c-2.5 0-4.7 1.5-5.6 3.8L28.1 50.9c-.8 2 .7 4.1 2.8 4.1h17.2l-6.4 22.4c-.6 2.1 2 3.5 3.4 1.8L71.4 48c1.7-1.9.3-5-2.3-5h-13l11.4-18.4c1.2-2-.2-4.6-2.6-4.6h-3.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_lightning_component"
