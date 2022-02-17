import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesCustom#buildTemplates/custom/custom95.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesCustom_buildTemplates_custom_custom95_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesCustom#buildTemplates/custom/custom95.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesCustom_buildTemplates_custom_custom95_scoped_css?scoped=true.js";

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
    "d": "M53 30.2V26h1c1.6 0 3-1.3 3-3 0-1.6-1.3-3-3-3h-8c-1.6 0-3 1.3-3 3 0 1.6 1.3 3 3 3h1v4.2c-12.4 1.5-22 12-22 24.8 0 13.8 11.2 25 25 25s25-11.2 25-25c0-12.8-9.6-23.3-22-24.8zM50 74c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19-8.5 19-19 19z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M56.6 44.8L52 49.4c-.6-.2-1.3-.4-2-.4-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6c0-.7-.1-1.4-.4-2l4.601-4.6c1-1 1-2.6 0-3.6-1.001-1.1-2.601-1.1-3.601 0z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom95"
}
