import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Frules.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_rules_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Frules.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_rules_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M2.3 26.9l8.1 8c.4.4 1.1.4 1.5 0l1.5-1.5c.4-.4.4-1.1 0-1.5l-2.6-2.5c-.4-.4-.1-1.2.5-1.2h22.1l-13.2 13c-.5.4-1.2.1-1.2-.5v-3.6c0-.6-.4-1-1-1h-2.1c-.6 0-1 .4-1 1v11.5c0 .6.4 1 1 1h11.4c.6-.1 1-.6 1-1.1v-2c0-.6-.4-1-1-1h-3.6c-.6 0-.9-.8-.5-1.2l16.1-16.1h10c.5 0 1.1-.5 1.1-1.1V25c0-.6-.4-1.1-1-1.1h-9.9L23.3 7.7c-.4-.5-.1-1.2.5-1.2h3.6c.6 0 1-.4 1-1v-2c0-.6-.5-1.1-1-1.1H16c-.6 0-1 .4-1 1V15c0 .6.4 1 1 1h2.1c.6 0 1-.4 1-1v-3.6c0-.6.8-.9 1.2-.5L33.5 24H11.4c-.6 0-.9-.8-.5-1.2l2.5-2.5c.4-.4.4-1.1 0-1.5l-1.5-1.5c-.4-.4-1.1-.4-1.5 0l-8.1 8.1c-.4.4-.4 1 0 1.5z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_rules"
}
