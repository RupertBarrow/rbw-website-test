import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Foffice365.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_office365_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Foffice365.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_office365_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M6 40.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M30.8 49.5c.6.2 1.3.2 1.9 0l11.9-3.9c.8-.3 1.4-1 1.4-1.9v-36c0-.6-.4-1.2-1-1.4L32.9 2.2c-.7-.2-1.4-.2-2 0L7 11.4c-.6.2-1 .8-1 1.4v27.1c0 .6.4 1.2 1 1.4l23.8 8.2zm1.2-6.7c0 .6-.5 1.1-1 1l-20-2.7c-.5-.1-.9-.5-.9-1v-.4c0-.4.2-.7.7-.9l3.8-1.8c.4-.2.6-.5.6-.9V14.8c0-.5.3-.9.8-1l15-3.4c.6-.1 1.2.3 1.2 1v31.4z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("g", stc2, [api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_office365"
}
