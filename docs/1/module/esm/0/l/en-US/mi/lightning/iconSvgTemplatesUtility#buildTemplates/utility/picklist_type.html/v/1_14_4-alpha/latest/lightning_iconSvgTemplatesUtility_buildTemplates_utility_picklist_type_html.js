import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/picklist_type.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_picklist_type_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/picklist_type.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_picklist_type_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48.3 14.9H16.4c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h31.9c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6zM48.3 29.2H16.4c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h31.9c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6zM6.9 29.2H3.7c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6zM6.9 14.9H3.7c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6zM6.9 43.5H3.7c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6zM48.3 43.5H16.4c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h31.9c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_picklist_type"
}
