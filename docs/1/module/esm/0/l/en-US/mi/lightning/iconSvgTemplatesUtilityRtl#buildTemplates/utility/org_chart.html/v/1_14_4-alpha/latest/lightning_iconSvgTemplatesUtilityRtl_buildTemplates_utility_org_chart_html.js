import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/org_chart.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_org_chart_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/org_chart.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_org_chart_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "x": "34.78",
    "y": "2.83",
    "width": "13.16",
    "height": "13.15",
    "rx": "1.21"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "x": "34.78",
    "y": "35.52",
    "width": "13.16",
    "height": "13.15",
    "rx": "1.21"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M46.73 19.18H36a1.2 1.2 0 00-1.2 1.2v3.71h-7.38l-.16-14.65A1.5 1.5 0 0025.76 8H15.65V4a1.22 1.22 0 00-1.2-1.21H3.71A1.21 1.21 0 002.5 4v10.78A1.21 1.21 0 003.7 16h10.75a1.22 1.22 0 001.2-1.21V11h8.62l.17 14.64a1.51 1.51 0 001.5 1.49h8.84v4a1.21 1.21 0 001.22 1.2h10.73a1.22 1.22 0 001.2-1.21V20.38a1.2 1.2 0 00-1.2-1.2z"
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
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("rect", stc2), api_element("path", stc3)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_org_chart"
}
