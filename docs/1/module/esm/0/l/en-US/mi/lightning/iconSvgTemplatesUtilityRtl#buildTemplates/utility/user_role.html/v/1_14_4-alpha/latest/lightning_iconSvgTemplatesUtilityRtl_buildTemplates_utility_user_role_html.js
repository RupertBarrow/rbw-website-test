import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/user_role.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_user_role_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/user_role.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_user_role_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M38.3 27.2a11.4 11.4 0 1011.4 11.4 11.46 11.46 0 00-11.4-11.4zm2 12.4a2.39 2.39 0 01-.9-.2l-4.3 4.3a1.39 1.39 0 01-.9.4 1 1 0 01-.9-.4 1.39 1.39 0 010-1.9l4.3-4.3a2.92 2.92 0 01-.2-.9 3.47 3.47 0 013.4-3.8 2.39 2.39 0 01.9.2c.2 0 .2.2.1.3l-2 1.9a.28.28 0 000 .5l1.3 1.3a.38.38 0 00.6 0l1.9-1.9c.1-.1.4-.1.4.1a3.71 3.71 0 01.2.9 3.57 3.57 0 01-3.9 3.5z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M25.2 49.8c2.2 0 1-1.5 1-1.5a15.44 15.44 0 01-3.4-9.7 15 15 0 011.4-6.4.77.77 0 01.2-.3c.7-1.4-.7-1.5-.7-1.5a12.1 12.1 0 00-1.9-.1A19.69 19.69 0 002.4 47.1c0 1 .3 2.8 3.4 2.8h19.1c.2-.1.2-.1.3-.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "21.7",
    "cy": "14.9",
    "r": "12.9"
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
      "viewBox": "0 0 52 52"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("circle", stc3)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_user_role"
}
