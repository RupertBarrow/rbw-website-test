import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fcontact_request.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_contact_request_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fcontact_request.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_contact_request_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48.7 50.9c-.7.2-1.1 1.1-.5 1.7l5.5 5.6c.6.6.6 1.5 0 2.1l-2.1 2.1c-.6.6-1.5.6-2.1 0L36 48.9c-.6-.6-.6-1.5 0-2.1l13.5-13.5c.6-.6 1.5-.6 2.1 0l2.1 2.2c.6.6.6 1.5 0 2.1l-5.6 5.6c-.6.6.5 1.7.5 1.7 12.8.4 22.7 8.8 25.8 20.3 3.3-4.4 5.3-9.8 5.3-15.6-.1-15.5-13.5-27.7-30.1-27.7-16.7 0-30 12.3-30 27.4 0 4.8 1.4 9.3 3.6 13.3.4.6.5 1.4.3 2.1l-3.9 10.7c-.4 1 .6 1.9 1.6 1.6L32 72.9c.6-.3 1.4-.1 2.1.3 4.5 2.5 9.9 4 15.7 4 7.5-.1 14.3-2.7 19.5-6.9-1.2-10.7-9.9-19-20.6-19.4z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_contact_request"
}
