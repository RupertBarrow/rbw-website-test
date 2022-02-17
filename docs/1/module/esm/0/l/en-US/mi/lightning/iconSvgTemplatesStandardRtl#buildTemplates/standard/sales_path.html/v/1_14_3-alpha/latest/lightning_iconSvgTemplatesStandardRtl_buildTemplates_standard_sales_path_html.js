import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/sales_path.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_sales_path_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/sales_path.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_sales_path_scoped_css?scoped=true.js";

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
      "d": "M84.7 68.8c0 .6-.4 1-1 1H63c-.5 0-1.1-.3-1.4-.7l-14.8-18c-.4-.7-.4-1.5 0-2.1l14.9-18c.3-.5.8-.7 1.4-.7h20.7c.5 0 1 .4 1 1 0 .2-.1.4-.2.6l-14.2 17c-.4.6-.4 1.4 0 2.1l14.2 17.2c.1.1.2.4.1.6zm-31.5 0c0 .6-.4 1-1 1H31.5c-.5 0-1.1-.3-1.4-.7l-14.8-18c-.4-.7-.4-1.5 0-2.1l14.9-18c.3-.5.8-.7 1.4-.7h20.7c.5 0 1 .4 1 1 0 .2-.1.4-.2.6l-14.2 17c-.4.6-.4 1.4 0 2.1L53 68.2c.1.1.2.4.2.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_sales_path"
