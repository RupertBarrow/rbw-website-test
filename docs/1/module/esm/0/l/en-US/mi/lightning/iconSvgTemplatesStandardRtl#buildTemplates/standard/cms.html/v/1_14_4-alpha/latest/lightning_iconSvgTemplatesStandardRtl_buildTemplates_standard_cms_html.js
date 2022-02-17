import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fcms.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_cms_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fcms.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_cms_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M60.4 29.9c-2 0-3.8.2-5.5.8 2.1 1.7 3.9 3.8 5.4 6.1h.1c7 0 12.7 5.7 12.7 12.7s-5.7 12.7-12.7 12.7c-1.7 0-3.5-.3-5-1 .9-1.3 1.7-2.7 2.3-4 .2-.6.5-1 .6-1.6.6-1.8.9-3.9.9-6 0-10.8-8.8-19.6-19.6-19.6S20 38.7 20 49.5s8.8 19.6 19.6 19.6c2 0 3.8-.2 5.5-.8-2.1-1.7-3.9-3.8-5.4-6.1h-.1c-7 0-12.7-5.7-12.7-12.7s5.7-12.7 12.7-12.7c1.7 0 3.5.3 5.1 1-2.4 3.2-3.9 7.3-3.9 11.7 0 10.8 8.8 19.6 19.6 19.6S80 60.3 80 49.5s-8.8-19.6-19.6-19.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_cms"
}
