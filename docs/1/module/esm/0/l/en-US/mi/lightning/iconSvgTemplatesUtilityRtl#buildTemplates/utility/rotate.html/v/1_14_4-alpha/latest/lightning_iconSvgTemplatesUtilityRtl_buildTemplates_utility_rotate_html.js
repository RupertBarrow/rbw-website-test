import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/rotate.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_rotate_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/rotate.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_rotate_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M48.5 2h-3c-.8 0-1.5.7-1.5 1.5v7c0 .9-1 1.5-1.6.8C37.7 6.1 31 3.4 23.7 4.1c-2.6.2-5.1 1-7.4 2.2-1.2.6-2.4 1.3-3.4 2.1-.7.5-.8 1.6-.2 2.3l2.1 2.1c.5.5 1.3.6 1.9.2 1.2-.8 2.5-1.5 3.9-2.1.6-.2 1.3-.4 2-.6 6.3-1.2 12.3 1.3 15.7 5.4 1.2 1.4.3 2.3-.7 2.3h-7c-.8 0-1.6.7-1.6 1.5v3c0 .8.8 1.5 1.6 1.5h18.2c.7 0 1.2-.6 1.2-1.3V3.5c0-.8-.7-1.5-1.5-1.5zM39.4 37.4c-.6-.6-1.5-.6-2.1 0-1.6 1.6-3.6 2.9-5.8 3.7-.6.2-1.3.4-2 .6-6.3 1.2-12.3-1.3-15.7-5.4-1.2-1.4-.3-2.3.7-2.3h7c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H3.3c-.7 0-1.3.6-1.3 1.3v19.2c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-7c0-.9 1-1.5 1.6-.8 4.6 5.2 11.4 7.9 18.7 7.2 2.6-.2 5.1-1 7.4-2.2 2.2-1.1 4.1-2.5 5.7-4.1.6-.6.6-1.6 0-2.1l-2-2.1z"
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
      "viewBox": "0 0 52 52"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_rotate"
}
