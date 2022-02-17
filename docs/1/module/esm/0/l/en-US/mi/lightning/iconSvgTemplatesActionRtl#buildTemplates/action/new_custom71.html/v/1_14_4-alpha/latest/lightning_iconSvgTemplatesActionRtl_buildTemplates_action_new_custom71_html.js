import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesActionRtl#buildTemplates/action/new_custom71.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_new_custom71_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesActionRtl#buildTemplates/action/new_custom71.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_new_custom71_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43 10.9C38.3 6.3 32 3.8 25.3 4 12.5 4.4 2 15.2 2 28v7.4c0 2.6 2.2 4.7 4.8 4.7H10v3.8c0 2 1.5 3.8 3.6 4.1 2.4.2 4.4-1.6 4.4-3.9v-14c0-2-1.5-3.8-3.6-4.1-2.4-.2-4.4 1.6-4.4 3.9v5.5H8.4c-.9 0-1.6-.7-1.6-1.6V28c0-10.4 8.4-19 18.6-19.3 5.3-.2 10.2 1.7 13.9 5.3 3.8 3.6 5.8 8.4 5.8 13.5v6.3c0 .9-.7 1.6-1.6 1.6H42v-5.3c0-2-1.5-3.8-3.6-4.1-2.4-.2-4.4 1.6-4.4 3.9v14c0 2 1.5 3.8 3.6 4.1 2.4.2 4.4-1.6 4.4-3.9v-3.9h3.2c2.6 0 4.8-2.1 4.8-4.7V28c0-6.3-2.4-12.5-7-17.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom71"
}
