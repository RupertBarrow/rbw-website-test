import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fincident.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_incident_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fincident.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_incident_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M16.4 10h3.2a.76.76 0 00.8-.8V6.8h11.2v2.4a.76.76 0 00.8.8h3.2a.76.76 0 00.8-.8V6.8A4.81 4.81 0 0031.6 2H20.4a4.81 4.81 0 00-4.8 4.8v2.4a.76.76 0 00.8.8zM26 36.66a1.79 1.79 0 101.8 1.79 1.76 1.76 0 00-1.8-1.79z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M45.2 14.8H6.8A4.81 4.81 0 002 19.6v25.6A4.81 4.81 0 006.8 50h38.4a4.81 4.81 0 004.8-4.8V19.6a4.81 4.81 0 00-4.8-4.8zM39.7 45H12.33c-1.5 0-2.34-1.92-1.5-3.29l13.69-22.09a1.7 1.7 0 013 0l13.67 22.12A2.1 2.1 0 0139.7 45z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "x": "24.22",
    "y": "26.49",
    "width": "3.59",
    "height": "8.97",
    "rx": ".6"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("rect", stc3)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_incident"
}
