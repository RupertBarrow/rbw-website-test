import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/multi_picklist.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_multi_picklist_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/multi_picklist.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_multi_picklist_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44.4 2H18.8C16.2 2 14 4.2 14 6.8v.8c0 .5.3.8.8.8H38c2.6 0 4.8 2.2 4.8 4.8V38c0 .5.3.8.8.8h.8c2.6 0 4.8-2.2 4.8-4.8V6.8C49.2 4.2 47 2 44.4 2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M33.2 13.2H7.6c-2.6 0-4.8 2.2-4.8 4.8v27.2C2.8 47.8 5 50 7.6 50h25.6c2.6 0 4.8-2.2 4.8-4.8V18c0-2.6-2.2-4.8-4.8-4.8zM14 42c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h1.6c.9 0 1.6.7 1.6 1.6V42zm0-9.6c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h1.6c.9 0 1.6.7 1.6 1.6v1.6zm0-9.6c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h1.6c.9 0 1.6.7 1.6 1.6v1.6zM31.6 42c0 .9-.7 1.6-1.6 1.6H18.9c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H30c.9 0 1.6.7 1.6 1.6V42zm0-9.6c0 .9-.7 1.6-1.6 1.6H18.9c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H30c.9 0 1.6.7 1.6 1.6v1.6zm0-9.6c0 .9-.7 1.6-1.6 1.6H18.9c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H30c.9 0 1.6.7 1.6 1.6v1.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_multi_picklist"
}
