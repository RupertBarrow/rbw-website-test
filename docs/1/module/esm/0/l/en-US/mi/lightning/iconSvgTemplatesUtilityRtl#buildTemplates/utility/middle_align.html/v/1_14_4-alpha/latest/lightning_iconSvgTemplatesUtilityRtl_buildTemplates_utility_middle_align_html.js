import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/middle_align.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_middle_align_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/middle_align.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_middle_align_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "x": "22",
    "y": "2",
    "width": "6.4",
    "height": "48",
    "rx": "1.6"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "data-name": "Rectangle",
    "x": "2",
    "y": "19",
    "width": "48",
    "height": "14.4",
    "rx": "3.2"
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
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("rect", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_middle_align"
}
