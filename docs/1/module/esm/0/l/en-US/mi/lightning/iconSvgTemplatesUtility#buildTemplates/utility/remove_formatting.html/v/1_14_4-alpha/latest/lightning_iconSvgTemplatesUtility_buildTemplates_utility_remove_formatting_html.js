import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/remove_formatting.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_remove_formatting_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/remove_formatting.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_remove_formatting_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M45.1 40.9l4.6-4.6c.4-.4.4-1 0-1.4l-2.8-2.8c-.4-.4-1-.4-1.4 0L41 36.8l-4.3-4.3c-.4-.4-1-.4-1.4 0l-2.8 2.8c-.4.4-.4 1 0 1.4l4.3 4.3-4.2 4.2c-.4.4-.4 1 0 1.4l2.8 2.8c.4.4 1 .4 1.4 0l4.2-4.2 4.5 4.5c.4.4 1 .4 1.4 0l2.8-2.8c.4-.4.4-1 0-1.4l-4.6-4.6zM4.8 8h10.8l-4.1 23.2c-.2 1 .5 1.8 1.4 1.8H18c.7 0 1.4-.5 1.5-1.2L23.7 8h11c.7 0 1.4-.5 1.5-1.3l.5-3c.2-.9-.5-1.7-1.5-1.7h-30c-.7 0-1.3.5-1.4 1.3l-.5 3c-.2.9.5 1.7 1.5 1.7zM28 38.5c0-.8-.7-1.5-1.5-1.5h-23c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h23c.8 0 1.5-.7 1.5-1.5v-3z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_remove_formatting"
}
