import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/contact_request.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_contact_request_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/contact_request.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_contact_request_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M25.4 27c-.6.2-.9.9-.4 1.4l4.4 4.5c.5.5.5 1.2 0 1.7l-1.7 1.7c-.5.5-1.2.5-1.7 0L15.3 25.5c-.5-.5-.5-1.2 0-1.7L26 13.1c.5-.5 1.2-.5 1.7 0l1.7 1.7c.5.5.5 1.2 0 1.7L24.9 21c-.5.5.4 1.4.4 1.4 10.2.3 18.1 7 20.5 16.1C48.4 34.9 50 30.6 50 26 49.9 13.7 39.2 4 26 4S2.2 13.8 2.2 25.8c0 3.8 1.1 7.4 2.9 10.6.3.5.4 1.1.2 1.7l-3.1 8.5c-.3.8.5 1.5 1.3 1.3l8.7-3.3c.5-.2 1.1-.1 1.7.2 3.6 2 7.9 3.2 12.5 3.2 5.9-.1 11.4-2.1 15.5-5.5-1.1-8.5-8-15.1-16.5-15.5z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_contact_request"
}
