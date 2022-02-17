import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl#buildTemplates%2Fstandard%2Fkey_dates.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_key_dates_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl#buildTemplates%2Fstandard%2Fkey_dates.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_key_dates_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M77.86 41.57a2.14 2.14 0 012.13 2v32.3a6.44 6.44 0 01-6.2 6.42H26.43a6.46 6.46 0 01-6.43-6.2V43.71a2.15 2.15 0 012-2.13h55.86zM49.21 47.8v.11l-2.87 9.2a.72.72 0 01-.74.55h-9.3a1 1 0 00-.63 1.69l.08.08 7.44 5.48a1 1 0 01.34.91v.12l-3.42 9.38a.91.91 0 001.32 1.1l.08-.06 8.05-6a1 1 0 011-.07l.09.07 8 6a.91.91 0 001.43-.94v-.1l-3.53-9.38a.93.93 0 01.15-.94l.09-.09 7.44-5.48a1 1 0 00-.43-1.76h-9.26a.9.9 0 01-.81-.43v-.12L50.88 48a.9.9 0 00-1.67-.2zM63.93 18a4.29 4.29 0 014.28 4.29v2.14h5.36A6.44 6.44 0 0180 30.86V33a2.14 2.14 0 01-2.14 2.14H22.14A2.14 2.14 0 0120 33v-2.14a6.44 6.44 0 016.43-6.43h5.36v-2.14a4.29 4.29 0 118.57 0v2.14h19.28v-2.14A4.3 4.3 0 0163.93 18z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_key_dates"
}
