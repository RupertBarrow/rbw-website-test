import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fmanage_perm_sets.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_manage_perm_sets_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fmanage_perm_sets.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_manage_perm_sets_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M45 2H7C4.2 2 2 4.2 2 7v38c0 2.7 2.2 5 5 5h38c2.7 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5zm-1.6 43H8.6c-.9 0-1.6-.7-1.6-1.6V8.6C7 7.7 7.7 7 8.6 7h34.8c.9 0 1.6.7 1.6 1.6v34.8c0 .9-.7 1.6-1.6 1.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M21.9 11.9h-8.3c-.9 0-1.7.7-1.7 1.7v8.3c0 .9.7 1.7 1.7 1.7h8.3c.9 0 1.7-.7 1.7-1.7v-8.3c-.1-.9-.8-1.7-1.7-1.7zM38.4 11.9h-8.3c-.9 0-1.7.7-1.7 1.7v8.3c0 .9.7 1.7 1.7 1.7h8.3c.9 0 1.7-.7 1.7-1.7v-8.3c0-.9-.8-1.7-1.7-1.7zM21.9 28.5h-8.3c-.9 0-1.7.7-1.7 1.7v8.3c0 .9.7 1.7 1.7 1.7h8.3c.9 0 1.7-.7 1.7-1.7v-8.3c-.1-1-.8-1.7-1.7-1.7zM38.4 28.5h-8.3c-.9 0-1.7.7-1.7 1.7v8.3c0 .9.7 1.7 1.7 1.7h8.3c.9 0 1.7-.7 1.7-1.7v-8.3c0-1-.8-1.7-1.7-1.7z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_manage_perm_sets"
}
