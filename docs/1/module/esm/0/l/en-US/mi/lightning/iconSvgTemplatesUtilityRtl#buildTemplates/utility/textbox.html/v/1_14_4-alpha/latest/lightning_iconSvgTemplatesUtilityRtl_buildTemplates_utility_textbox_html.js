import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/textbox.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_textbox_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/textbox.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_textbox_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M2.6 44.8V7.3c0-2.6 2.1-4.7 4.7-4.7h37.5c2.6 0 4.7 2.1 4.7 4.7v37.4c0 2.6-2.1 4.7-4.7 4.7H7.4c-2.6 0-4.7-2.1-4.8-4.6zm39-36H10.4c-.9 0-1.6.7-1.6 1.6v31.2c0 .9.7 1.6 1.6 1.6h31.2c.9 0 1.6-.7 1.6-1.6V10.4c0-.9-.7-1.6-1.6-1.6zm-6.3 28.1h-3.1c-.9 0-1.6-.7-1.6-1.6V16.7c0-.9.7-1.6 1.6-1.6h3.1c.9 0 1.6.7 1.6 1.6v18.6c0 .9-.7 1.6-1.6 1.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_textbox"
}
