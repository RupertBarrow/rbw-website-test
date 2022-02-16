import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesActionRtl%23buildTemplates%2Faction%2Fgoal.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_goal_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesActionRtl%23buildTemplates%2Faction%2Fgoal.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_goal_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44 5v42c0 1.7 1.4 3 3 3 1.7 0 3-1.4 3-3V5c0-1.7-1.3-3-3-3s-3 1.3-3 3zM2 7.2v23.6c0 .6.4 1.1.9 1.4 12.8 7 23-4.1 34.8-.6 1.1.3 2.3-.5 2.3-1.6V7.6c0-.7-.6-1.3-1.2-1.5-12.3-4.5-22.6 7.2-35.6.4-.5-.3-1.2.1-1.2.7zm3.9 22v-5.7c1.8.8 3.9 1.5 5.8 1.5h.2v-6.4h-.4c-1.9 0-3.8-.2-5.6-.7v-6l1.2.4c2 .3 3.1.7 4.7.7h.2v5.5c1.6 0 4.3-.2 6-.5v-5.7c2.1-.3 4.2-.9 6-1.4v5.8c.1 0 .3-.1.4-.1 1.8-.5 4.2-1 5.6-1.3V9.5c1.1-.3 4.1-.5 5.1-.4l.9.1v6.2c-1-.3-4.9-.3-6-.1v6c1.1-.2 1.2-.3 2.5-.3s2.5 0 3.5.2V27l-1.6-.1c-.7-.1-1.1-.1-1.6-.1-1.3 0-1.6.1-2.8.3v-5.7c-1.7.4-4.3.9-6 1.4v5.5c-.4.1-.9.3-1.4.4-1.3.3-2.9.6-4.6.9v-5.3c-1.8.4-4.5.7-6 .7v5h-.2c-2.7 0-4.3-.1-5.3-.6l-.5-.2h-.1zM18 18.1v6.2c1.7-.3 3.3-.8 4.8-1.2.4-.2.8-.3 1.2-.4v-6c-1.8.5-3.9 1-6 1.4z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_goal"
}
