import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/record_delete.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_record_delete_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/record_delete.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_record_delete_scoped_css?scoped=true.js";

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
    "d": "M17.2 11.6h17.6c.9 0 1.6-.7 1.6-1.6V6.8c0-2.6-2.2-4.8-4.8-4.8H20.4c-2.6 0-4.8 2.2-4.8 4.8V10c0 .9.7 1.6 1.6 1.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M43.6 6H42c-.5 0-.8.3-.8.8V10c0 3.5-2.9 6.4-6.4 6.4H17.2c-3.5 0-6.4-2.9-6.4-6.4V6.8c0-.5-.3-.8-.8-.8H8.4c-2.6 0-4.8 2.2-4.8 4.8v34.4c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8V10.8c0-2.6-2.2-4.8-4.8-4.8zm-9.3 36.4c0 1.4-1.1 2.4-2.4 2.4H20.1c-1.4 0-2.4-1.1-2.4-2.4V32.1c0-.4.3-.7.7-.7h15.2c.4 0 .7.3.7.7v10.3zm2-14.9c0 .4-.3.7-.7.7H16.5c-.4 0-.7-.3-.7-.7V26c0-.4.3-.7.7-.7h6.1v-2c0-1.1.9-2 2-2h2.9c1.1 0 2 .9 2 2v2h6.1c.4 0 .7.3.7.7v1.5z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M24 34.8h-1c-.3 0-.5.2-.5.5V41c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-5.7c0-.3-.2-.5-.5-.5zM28.9 34.8h-1c-.3 0-.5.2-.5.5V41c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-5.7c0-.3-.2-.5-.5-.5zM27 23.4h-2c-.3 0-.5.2-.5.5v1.5h2.9v-1.5c.1-.3-.1-.5-.4-.5z"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_record_delete"
}
