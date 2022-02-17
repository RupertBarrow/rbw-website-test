import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Flist_email.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_list_email_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Flist_email.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_list_email_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M64.9 34.9H30.3c-2.7 0-4.8 2.2-4.8 4.8v.8c0 .4.4.8.8.8h32.1c2.7 0 4.8 2.2 4.8 4.8v23c0 .4.4.8.8.8h.8c2.7 0 4.8-2.2 4.8-4.8V39.7c.1-2.6-2.1-4.8-4.7-4.8z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M75.3 24.6H40.7c-2.7 0-4.8 2.2-4.8 4.8v.8c0 .4.4.8.8.8h32.1c2.7 0 4.8 2.2 4.8 4.8v23c0 .4.4.8.8.8h.8c2.7 0 4.8-2.2 4.8-4.8V29.4c.1-2.6-2.1-4.8-4.7-4.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M38.5 64.2c.5.5 1.2.5 1.7 0l18.3-17c.3-.6.2-1.7-1.1-1.7l-36.1.1c-1 0-1.8.9-1.1 1.7l18.3 16.9zm20.3-10.4c0-.8-1-1.3-1.6-.7L42.9 66.3c-1 .9-2.2 1.4-3.5 1.4-1.3 0-2.5-.5-3.5-1.3L21.7 53.1c-.6-.6-1.6-.2-1.6.7-.1-.2-.1 18.4-.1 18.4 0 1.8 1.5 3.2 3.2 3.2h32.3c1.8 0 3.2-1.5 3.2-3.2V53.8z"
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
      "viewBox": "0 0 100 100"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_list_email"
}
