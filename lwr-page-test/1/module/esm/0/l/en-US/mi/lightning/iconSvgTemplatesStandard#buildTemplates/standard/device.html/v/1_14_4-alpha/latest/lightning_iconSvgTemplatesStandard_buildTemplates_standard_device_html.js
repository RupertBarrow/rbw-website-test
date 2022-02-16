import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fdevice.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_device_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fdevice.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_device_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
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
    "d": "M56.59 37.92H53.3v-3.3a2.2 2.2 0 00-2.2-2.19h-2.2a2.2 2.2 0 00-2.2 2.19v3.3h-3.29a2.21 2.21 0 00-2.2 2.2v2.19a2.21 2.21 0 002.2 2.2h3.29v3.3A2.21 2.21 0 0048.9 50h2.2a2.21 2.21 0 002.2-2.2v-3.3h3.29a2.21 2.21 0 002.2-2.2v-2.18a2.21 2.21 0 00-2.2-2.2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M79.6 25.33a5 5 0 00-4.93-4.93H25.33a5 5 0 00-4.93 4.93V57.4a5 5 0 004.93 4.93h49.34a5 5 0 004.93-4.93zm-7.4 27.75a1.89 1.89 0 01-1.85 1.85h-40.7a1.89 1.89 0 01-1.85-1.85V29.65a1.89 1.89 0 011.85-1.85h40.7a1.89 1.89 0 011.85 1.85zM58.63 72.2h-3.7A1.16 1.16 0 0153.7 71v-2.5a1.16 1.16 0 00-1.23-1.23h-4.94a1.16 1.16 0 00-1.23 1.23V71a1.16 1.16 0 01-1.23 1.23h-3.7a5 5 0 00-4.94 4.93v.62a1.9 1.9 0 001.85 1.85h23.44a1.9 1.9 0 001.85-1.85v-.62a5 5 0 00-4.94-4.96z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_device"
}
