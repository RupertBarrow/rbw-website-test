import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/inspector_panel.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_inspector_panel_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/inspector_panel.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_inspector_panel_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M3.8 45.3h45c.8 0 1.5-.7 1.5-1.5v-8.3c0-.8-.7-1.5-1.5-1.5h-45c-.8 0-1.5.7-1.5 1.5v8.3c0 .8.7 1.5 1.5 1.5zm0-38.6c-.8 0-1.6.7-1.6 1.5v20.4c0 .7.8 1.4 1.6 1.4h44.8c.8 0 1.5-.7 1.5-1.5V8.2c0-.8-.7-1.5-1.5-1.5H3.8z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_inspector_panel"
}
