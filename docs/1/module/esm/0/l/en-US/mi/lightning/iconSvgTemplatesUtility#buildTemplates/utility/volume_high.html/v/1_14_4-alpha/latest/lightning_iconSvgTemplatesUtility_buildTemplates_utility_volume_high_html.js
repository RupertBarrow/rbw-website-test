import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/volume_high.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_volume_high_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/volume_high.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_volume_high_scoped_css?scoped=true.js";

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
    "d": "M24.6 2.6L12 18H6c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h6l12.6 15.4c1.3 1.3 3.4.4 3.4-1.4V4c0-1.8-2.2-2.7-3.4-1.4zM42.6 8.7c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1.1 0 1.4C43.6 15.2 46 20.3 46 26c0 5.7-2.4 10.8-6.2 14.5-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0C47.1 39 50 32.8 50 26c0-6.8-2.8-13-7.4-17.3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M36.3 15.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4 2.2 2 3.5 4.9 3.5 8.1 0 3.2-1.4 6.1-3.6 8.1-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0 2.9-2.7 4.8-6.6 4.8-11 0-4.2-1.8-8.1-4.7-10.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_volume_high"
}
