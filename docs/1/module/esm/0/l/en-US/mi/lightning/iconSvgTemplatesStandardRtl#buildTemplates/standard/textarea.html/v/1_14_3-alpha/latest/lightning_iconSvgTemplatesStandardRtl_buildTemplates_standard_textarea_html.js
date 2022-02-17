import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Ftextarea.css%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_textarea_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Ftextarea.scoped.css?scoped=true%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_textarea_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M20 74V26c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6v48c0 3.3-2.7 6-6 6H26c-3.3 0-6-2.7-6-6zm49.9-46H30c-1.1 0-2 .9-2 2v40c0 1.1.9 2 2 2h39.9c1.1 0 2-.9 2-2V30c0-1.1-.9-2-2-2zM39 51.5c.3.1.5.4.8.6 1 .8 1.9 1.7 2.8 2.5 1.3 1.2 2.7 2.4 4 3.6l1.9 1.9c.5.5.8 1.1.8 1.8 0 1.1-.9 2-2 2h-9.2c-1.1 0-2-.9-2-2v-8.7c0-1.1 1-2 2-2 .3 0 .6.1.9.3z"
    },
    key: 2,
    svg: true
  }, [])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_textarea"
