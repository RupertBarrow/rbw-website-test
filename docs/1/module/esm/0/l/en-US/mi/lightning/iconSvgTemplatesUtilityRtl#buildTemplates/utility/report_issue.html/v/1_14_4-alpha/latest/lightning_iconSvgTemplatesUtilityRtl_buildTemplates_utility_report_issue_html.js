import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Freport_issue.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_report_issue_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Freport_issue.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_report_issue_scoped_css?scoped=true.js";

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
    "d": "M22.8 45.7v1c0 1.2-.9 2.1-2.1 2.1H4.1c-1.2 0-2.1-.9-2.1-2.1v-1c0-2.5 3-4.1 5.7-5.3.1 0 .2-.1.3-.2.2-.1.5-.1.7 0 1.1.7 2.4 1.1 3.8 1.1 1.3 0 2.6-.4 3.8-1.1.2-.1.4-.1.6 0 .1 0 .2.1.3.2 2.7 1.3 5.6 2.8 5.6 5.3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M34.8 3.2c-8.5 0-15.3 6.5-15.3 14.5 0 2.5.7 5 2 7.2.1.2.2.5.2.8L20 30.3c-.2.6.2 1.1.7 1.3.2.1.4.1.6 0l4.5-1.6c.3-.1.6-.1.8.1 2.4 1.4 5.2 2.2 8 2.2 8.5 0 15.3-6.6 15.3-14.6.1-8-6.8-14.5-15.1-14.5zm-1.1 5.7h3v7l-.3 4.6H34l-.2-4.6v-7zm1.5 17.3c-1.4 0-1.8-.8-1.8-1.8s.4-1.8 1.8-1.8 1.8.8 1.8 1.8c.1 1-.4 1.8-1.8 1.8z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "12.4",
    "cy": "33.7",
    "rx": "5.2",
    "ry": "5.7"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("ellipse", stc4)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_report_issue"
}
