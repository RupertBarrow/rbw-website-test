import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fsignpost.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_signpost_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fsignpost.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_signpost_scoped_css?scoped=true.js";

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
    "d": "M49.5 9l-4.2-3.1c-.6-.4-1.2-.6-1.9-.6H29.2V3.6c0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6.7-1.6 1.6v1.6h-16c-.9 0-1.6.7-1.6 1.6v6.4c0 .9.7 1.6 1.6 1.6H43.4c.7 0 1.4-.2 1.9-.6l4.2-3.1c.7-.6.7-1.6 0-2.1zM45.2 22.8h-16v-2.4c0-.5-.3-.8-.8-.8h-4.8c-.5 0-.8.3-.8.8v2.4H8.6c-.7 0-1.4.2-1.9.6l-4.2 3.1c-.7.5-.7 1.5 0 2.1l4.2 3.1c.6.4 1.2.6 1.9.6h36.6c.9 0 1.6-.7 1.6-1.6v-6.4c0-.8-.7-1.5-1.6-1.5zM29.2 43.3V38c0-.5-.3-.8-.8-.8h-4.8c-.5 0-.8.3-.8.8v5.3c-3.2.9-5 2.8-5.5 5.2-.2.7.4 1.5 1.2 1.5h15.1c.8 0 1.4-.7 1.2-1.5-.6-2.4-2.4-4.3-5.6-5.2z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_signpost"
}
