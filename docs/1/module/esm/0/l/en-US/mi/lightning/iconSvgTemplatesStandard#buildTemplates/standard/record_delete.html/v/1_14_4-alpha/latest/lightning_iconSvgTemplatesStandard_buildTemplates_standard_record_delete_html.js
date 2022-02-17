import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/record_delete.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_record_delete_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/record_delete.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_record_delete_scoped_css?scoped=true.js";

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
    "d": "M39 32h22c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M72 25h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 8-8 8H39c-4.4 0-8-3.6-8-8v-4c0-.6-.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V31c0-3.3-2.7-6-6-6zM60.4 70.6c0 1.7-1.3 3.1-3.1 3.1H42.7c-1.7 0-3.1-1.3-3.1-3.1v-13c0-.5.4-.9.9-.9h19c.5 0 .9.4.9.9v13zm2.4-18.7c0 .5-.4.9-.9.9H38.1c-.5 0-.9-.4-.9-.9v-1.8c0-.5.4-.9.9-.9h7.6v-2.4c0-1.3 1.1-2.4 2.4-2.4h3.7c1.3 0 2.4 1.1 2.4 2.4v2.4h7.6c.5 0 .9.4.9.9v1.8z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M47.6 61h-1.2c-.4 0-.6.2-.6.6v7.1c0 .4.2.6.6.6h1.2c.4 0 .6-.2.6-.6v-7.1c0-.4-.3-.6-.6-.6zM53.7 61h-1.2c-.4 0-.6.2-.6.6v7.1c0 .4.2.6.6.6h1.2c.4 0 .6-.2.6-.6v-7.1c0-.4-.3-.6-.6-.6zM51.2 46.7h-2.4c-.4 0-.6.2-.6.6v1.8h3.7v-1.8c-.1-.4-.3-.6-.7-.6z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_record_delete"
}
