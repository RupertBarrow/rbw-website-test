import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/sales_path.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_sales_path_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/sales_path.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_sales_path_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M15.2 68.2L29.4 51c.4-.7.4-1.5 0-2.1l-14.2-17c-.1-.2-.2-.4-.2-.6 0-.6.5-1 1-1h20.7c.6 0 1.1.2 1.4.7L53 49c.4.6.4 1.4 0 2.1l-14.8 18c-.3.4-.9.7-1.4.7H16.1c-.6 0-1-.4-1-1-.1-.2 0-.5.1-.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M46.8 68.2L60.9 51c.4-.7.4-1.5 0-2.1l-14.2-17c-.1-.2-.2-.4-.2-.6 0-.6.5-1 1-1h20.7c.6 0 1.1.2 1.4.7l14.9 18c.4.6.4 1.4 0 2.1l-14.8 18c-.3.4-.9.7-1.4.7H47.6c-.6 0-1-.4-1-1 0-.2.1-.5.2-.6z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_sales_path"
}
