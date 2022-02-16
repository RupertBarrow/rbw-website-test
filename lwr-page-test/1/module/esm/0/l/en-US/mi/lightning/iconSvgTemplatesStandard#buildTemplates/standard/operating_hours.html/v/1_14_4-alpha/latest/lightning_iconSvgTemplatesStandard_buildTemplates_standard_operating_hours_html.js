import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Foperating_hours.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_operating_hours_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Foperating_hours.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_operating_hours_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M53 50.18a1.32 1.32 0 01-.35-1v-8.43a1.35 1.35 0 00-1.32-1.32h-2.61a1.35 1.35 0 00-1.32 1.32v10.66a1.85 1.85 0 00.35 1l6.52 6.52a1.28 1.28 0 001.85 0L58 57a1.28 1.28 0 000-1.85z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M50 28.86A21.14 21.14 0 1071.18 50 21.2 21.2 0 0050 28.86zm0 37A15.85 15.85 0 1165.9 50 15.9 15.9 0 0150 65.85z",
    "fill-rule": "evenodd"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M28.82 59.91a15.74 15.74 0 010-19.81L25.31 36a21 21 0 000 27.94zM71.23 40.12a15.74 15.74 0 010 19.81L74.64 64a21 21 0 000-27.94z",
    "fill-rule": "evenodd"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_operating_hours"
}
