import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/profile.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_profile_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/profile.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_profile_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "cx": "26",
    "cy": "20.7",
    "r": "6.15"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M27.14 2.72a1.89 1.89 0 00-2.28 0c-8.42 6.34-16.37 12.33-16.37 24A16.92 16.92 0 0013.19 39c.24.24.48.47.74.7a17.9 17.9 0 0010.53 4.19L22.74 47s-2 2.68 2.69 2.68h1.14c4.72 0 2.68-2.68 2.68-2.68l-1.71-3.06a17.9 17.9 0 0010.53-4.19c3.56-3.13 5.44-7.64 5.44-13 0-11.7-7.95-17.69-16.37-24.03zm10.1 32.37a9.74 9.74 0 01-1 1.13A10.77 10.77 0 0016 35.67 10.17 10.17 0 0114.53 34a15 15 0 01-1.94-10.84c1.24-6.62 6.07-11 13.41-16.56 8.57 6.52 13.73 11.4 13.73 20.08a13.73 13.73 0 01-2.49 8.41z"
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
  }, [api_element("g", stc0, [api_element("circle", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_profile"
}
