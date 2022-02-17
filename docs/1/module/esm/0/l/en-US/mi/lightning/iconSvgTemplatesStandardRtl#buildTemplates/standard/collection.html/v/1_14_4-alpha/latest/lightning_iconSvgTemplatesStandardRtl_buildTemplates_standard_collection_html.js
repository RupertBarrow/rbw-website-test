import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fcollection.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_collection_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fcollection.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_collection_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M33.74 20.26h17.43v29.4l.39.57.71-.13 7.06-6.43.49-.15.51.14L67 50l.75.13.36-.57V20.08h4.08s2.58.24 3.74 1.39a6.53 6.53 0 012 3.43v49.31c0 1.85-.17 2.85-1.1 3.94A5.69 5.69 0 0172.21 80h-38c-.31 0-1.9.34-4.22-1.93a6.65 6.65 0 01-1.85-4.44v-1.55h-2a3.93 3.93 0 01-4-4.17c.08-3.69 3.91-3.8 3.91-3.8h2.05v-10h-2a3.86 3.86 0 01-4-4 4 4 0 014-4.18h2v-9.74s-1.49.05-2 0a3.87 3.87 0 01-4-3.87 3.93 3.93 0 014-4.1h2v-2.38a6 6 0 011.48-3.65 6.46 6.46 0 014.16-1.93z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_collection"
}
