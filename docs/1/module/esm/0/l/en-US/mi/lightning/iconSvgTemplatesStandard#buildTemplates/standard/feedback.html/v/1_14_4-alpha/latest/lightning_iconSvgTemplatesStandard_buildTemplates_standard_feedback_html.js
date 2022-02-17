import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Ffeedback.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_feedback_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Ffeedback.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_feedback_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M79.1 56.5c-.1-.4-.1-.9.2-1.2C81 52.2 82 48.7 82 45c0-11.6-9.9-21-22-21-5.2 0-10 1.8-13.8 4.7C58.7 31.4 68 42.2 68 55c0 3.6-.7 7.1-2.1 10.2 2-.5 3.9-1.3 5.7-2.4.4-.2.8-.3 1.2-.1l6.4 2.3c1.1.4 2.2-.7 1.9-1.9l-2-6.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M40 34c-12.1 0-22 9.4-22 21 0 3.7 1 7.2 2.8 10.3.2.4.3.8.2 1.2l-2.1 6.7c-.4 1.2.7 2.3 1.9 1.9l6.4-2.3c.4-.1.9-.1 1.2.1 3.4 2 7.3 3.1 11.6 3.1 12.1 0 22-9.4 22-21s-9.9-21-22-21zM28 59c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_feedback"
}
