import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Ftextbox.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_textbox_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Ftextbox.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_textbox_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44.7 49.4H7.3c-2.6 0-4.7-2.1-4.7-4.7V7.3c0-2.6 2.1-4.7 4.7-4.7h37.5c2.6 0 4.7 2.1 4.7 4.7v37.5c-.1 2.5-2.2 4.6-4.8 4.6zm-35.8-39v31.2c0 .9.7 1.6 1.6 1.6h31.2c.9 0 1.6-.7 1.6-1.6V10.4c0-.9-.7-1.6-1.6-1.6H10.5c-.9 0-1.6.7-1.6 1.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M15.2 35.3V16.7c0-.9.7-1.6 1.6-1.6h3.1c.9 0 1.6.7 1.6 1.6v18.6c0 .9-.7 1.6-1.6 1.6h-3.1c-.9 0-1.6-.7-1.6-1.6z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_textbox"
}
