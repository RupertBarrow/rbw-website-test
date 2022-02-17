import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/yubi_key.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_yubi_key_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/yubi_key.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_yubi_key_scoped_css?scoped=true.js";

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
    "d": "M38.5 14.1h-37c-.8 0-1.5.7-1.5 1.5v21c0 .8.7 1.5 1.5 1.5h37c.8 0 1.5-.7 1.5-1.5v-21c0-.8-.7-1.5-1.5-1.5zM21 32.2c-3.4 0-6.1-2.7-6.1-6.1S17.6 20 21 20s6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M50.5 18H36c-.8 0-1.5.7-1.5 1.5v13c0 .8.7 1.5 1.5 1.5h14.5c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5zm-3.4 4c.6 0 1 .4 1 1v1.9H40V22h7.1zm0 8H40v-2.7h8.1V29c0 .6-.4 1-1 1z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "21",
    "cy": "26.1",
    "r": "1.2"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("circle", stc4)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_yubi_key"
}
