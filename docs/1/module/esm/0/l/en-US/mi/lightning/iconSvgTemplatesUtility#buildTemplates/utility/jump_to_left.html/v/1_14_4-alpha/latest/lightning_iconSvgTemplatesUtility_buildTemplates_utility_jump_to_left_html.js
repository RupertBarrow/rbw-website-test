import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/jump_to_left.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_jump_to_left_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/jump_to_left.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_jump_to_left_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M21.5 40.6L7.9 27.1a1.57 1.57 0 010-2.2l13.6-13.5a1.57 1.57 0 012.2 0l2.2 2.2a1.57 1.57 0 010 2.2l-9.4 9.1a1.57 1.57 0 000 2.2l9.3 9.1a1.57 1.57 0 010 2.2l-2.2 2.2a1.66 1.66 0 01-2.1 0z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M39.6 40.6L25.8 27.1a1.57 1.57 0 010-2.2l13.8-13.5a1.57 1.57 0 012.2 0l2.2 2.2a1.57 1.57 0 010 2.2l-9.4 9.1a1.57 1.57 0 000 2.2l9.3 9.1a1.57 1.57 0 010 2.2l-2.2 2.2a1.66 1.66 0 01-2.1 0z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_jump_to_left"
}
