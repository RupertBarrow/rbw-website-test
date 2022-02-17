import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fdata_streams.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_data_streams_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fdata_streams.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_data_streams_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M68.8 20.3a10.9 10.9 0 11-10.5 13.9h-.4a5 5 0 00-5 5v4.3l6.3 6.3a1.93 1.93 0 010 2.8L57.9 54a1.93 1.93 0 01-2.8 0L53 51.9v9a10.85 10.85 0 01-10.5 10.9h-.8a10.91 10.91 0 11-10.5-13.9 11 11 0 0110.5 7.9h.4a5 5 0 005-5v-8.7L45.3 54a1.93 1.93 0 01-2.8 0l-1.4-1.4a1.93 1.93 0 010-2.8l5.9-5.9v-4.7a10.85 10.85 0 0110.5-10.9h.8a10.83 10.83 0 0110.5-8zM31.2 63.9a5 5 0 00-5 5 5 5 0 0010 0 5 5 0 00-5-5zm37.6-37.7a5 5 0 00-5 5 5 5 0 1010 0 5 5 0 00-5-5z"
  },
  key: 2,
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
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_data_streams"
}
