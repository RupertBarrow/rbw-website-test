import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/file.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_file_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/file.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_file_scoped_css?scoped=true.js";

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
    "d": "M9.7 36.1V11.3c-2.6 0-4.7 2.1-4.7 4.6v29.4C5 47.9 7.1 50 9.7 50H33c2.6 0 4.7-2.1 4.7-4.6H19c-5.1 0-9.3 0-9.3-9.3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M45.4 15.9h-7.8c-2.6 0-4.7-2.1-4.7-4.6V3.5c.1-.8-.6-1.5-1.5-1.5H19c-2.6 0-4.7 2.1-4.7 4.6V36c0 2.6 2.1 4.6 4.7 4.6h23.3c2.6 0 4.7-2.1 4.7-4.6V17.5c0-.9-.7-1.6-1.6-1.6z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M46.7 9.4l-7.2-7.1c-.2-.2-.4-.3-.7-.3-.6 0-1.1.5-1.1 1.1v5.1c0 1.7 1.4 3.1 3.1 3.1h5.1c.6 0 1.1-.5 1.1-1.1 0-.3-.1-.5-.3-.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_file"
}
