import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/redo.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_redo_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/redo.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_redo_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M35.5 12.5h.7c1 0 1-.7.4-1.3l-4.9-4.9c-.6-.5-.6-1.5 0-2.1l2.1-2.1c.5-.6 1.5-.6 2.1 0L48.8 15c.5.5.5 1.3 0 1.8l-13 13c-.6.5-1.3.5-1.9-.1l-2.2-2.2c-.6-.6-.7-1.5-.1-2.1l4.9-4.9c.7-.7.9-1.3.1-1.7-.3-.1-1.1-.1-1.1-.1H21.6c-7.1 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8h8.1c.8 0 1.4.7 1.4 1.5V49c0 .8-.5 1.4-1.3 1.4h-8.2C11.2 50.4 2.7 42 2.7 31.5s8.5-18.9 18.9-18.9l13.9-.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_redo"
}
