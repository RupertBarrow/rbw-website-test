import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fdefault.css%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_default_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fdefault.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_default_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_3/latest/lwc.js";
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
      "opacity": ".5",
      "d": "M44.6 32.8c2.1-2.1 4.9-3.4 8.1-3.4 4.2 0 7.9 2.3 9.9 5.7 1.7-.7 3.6-1.2 5.6-1.2C75.8 34 82 40.1 82 47.6c0 7.6-6.2 13.7-13.8 13.7-.9 0-1.8-.1-2.7-.3-1.7 3-5 5.1-8.8 5.1-1.6 0-3.1-.4-4.4-1-1.8 4-5.8 6.9-10.6 6.9-5 0-9.2-3.1-10.8-7.4-.7.1-1.4.2-2.2.2-5.9 0-10.7-4.7-10.7-10.6 0-3.9 2.1-7.4 5.3-9.2-.7-1.5-1-3.1-1-4.8 0-6.7 5.6-12.2 12.4-12.2 4.1 0 7.7 1.9 9.9 4.8"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_default"
