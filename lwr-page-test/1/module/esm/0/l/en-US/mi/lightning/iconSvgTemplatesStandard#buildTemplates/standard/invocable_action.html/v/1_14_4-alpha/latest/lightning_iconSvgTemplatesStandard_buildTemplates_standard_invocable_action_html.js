import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Finvocable_action.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_invocable_action_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Finvocable_action.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_invocable_action_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M62.8 71.2V79c0 .6.5 1.1 1.1 1.1.2 0 .5-.1.6-.2l15.1-12.3c.2-.2.3-.5.3-.8 0-.3-.2-.6-.4-.8L64.4 53.1c-.1-.1-.3-.1-.5-.1-.6 0-1.1.5-1.1 1.1v8.3c-9.3 2.5-16.9-5.7-16.9-5.7-.2-.2-.5-.3-.8-.3-.6 0-1.1.5-1.1 1.1v.2c3.8 15.7 18.8 13.5 18.8 13.5z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M38.2 58.9l-.2-.7V57.3c0-3.9 3.2-7.1 7.1-7.1 1.9 0 3.6.7 5 2.1l.1.1.1.1c.9 1 3.5 3.1 6.6 4V54c0-3.9 3.2-7.1 7.1-7.1 1.5 0 2.5.4 3.2.8l.7.3.6.5 8.5 7.2c2-2 3.2-4.8 3.2-7.8 0-6.2-5-11.2-11.2-11.2h-.6v-1c0-6.2-5.1-11.3-11.3-11.3-3 0-5.6 1.1-7.6 3-1.6-4.2-5.7-7.4-10.6-7.4-6.2 0-11.3 5.1-11.3 11.3 0 2.1.6 4 1.5 5.7-5 1.2-8.6 5.6-8.6 11 0 6.1 4.7 11 10.8 11.2h7.4c-.4-.1-.4-.2-.5-.3z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_invocable_action"
}
