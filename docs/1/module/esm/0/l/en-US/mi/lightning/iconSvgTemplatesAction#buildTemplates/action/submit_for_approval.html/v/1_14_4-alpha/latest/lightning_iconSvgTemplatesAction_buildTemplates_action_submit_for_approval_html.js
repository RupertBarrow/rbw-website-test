import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fsubmit_for_approval.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_submit_for_approval_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fsubmit_for_approval.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_submit_for_approval_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M45.2 29.2h-8.8c-2.6 0-4.8-2.2-4.8-4.8.4-7.1 3.7-7.5 4-12.1.3-4.8-2.7-9.1-7.4-10.1C22 .9 16.4 5.6 16.4 11.6c0 5.3 3.6 5.3 4 12.8 0 2.6-2.2 4.8-4.8 4.8H6.8C4.2 29.2 2 31.3 2 34v3.2c0 .9.7 1.6 1.6 1.6h44.8c.9 0 1.6-.7 1.6-1.6V34c0-2.7-2.2-4.8-4.8-4.8zM45.3 43.6H6.7c-.9 0-1.5.7-1.5 1.5v.1c0 2.6 2.2 4.8 4.8 4.8h32.1c2.6 0 4.7-2.2 4.7-4.8v-.1c0-.8-.7-1.5-1.5-1.5z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_submit_for_approval"
}
