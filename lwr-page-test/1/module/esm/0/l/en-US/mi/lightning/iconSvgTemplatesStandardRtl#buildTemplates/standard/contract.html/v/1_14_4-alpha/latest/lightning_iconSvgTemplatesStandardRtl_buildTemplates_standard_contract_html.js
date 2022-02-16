import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fcontract.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_contract_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fcontract.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_contract_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M25 34.6c0 .8.6 1.4 1.4 1.4H37c2.2 0 4-1.8 4-4V21.4c0-.8-.6-1.4-1.4-1.4-.4 0-.7.1-1 .4L25.4 33.6c-.3.3-.4.6-.4 1zm0 9.4v30c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6H49c-1.1 0-2 .9-2 2v14c0 3.3-2.7 6-6 6H27c-1.1 0-2 .9-2 2zm43.4-10.7l-3.6 3.5c-.1.1-.1.3-.1.4l.8 4.9c.1.3-.3.6-.6.4l-4.4-2.3c-.1-.1-.3-.1-.4 0l-4.4 2.3c-.3.2-.7-.1-.6-.4l.8-4.9c0-.2 0-.3-.1-.4l-3.6-3.5c-.3-.2-.1-.6.2-.7l4.9-.7c.1 0 .2-.1.3-.2l2.2-4.5c.2-.3.6-.3.8 0l2.2 4.5c0 .1.2.2.3.2l4.9.7c.3.1.5.5.4.7zM37 64c0-1.1.9-2 2-2h26c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H39c-1.1 0-2-.9-2-2v-2zm-4-12c0-1.1.9-2 2-2h30c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_contract"
}
