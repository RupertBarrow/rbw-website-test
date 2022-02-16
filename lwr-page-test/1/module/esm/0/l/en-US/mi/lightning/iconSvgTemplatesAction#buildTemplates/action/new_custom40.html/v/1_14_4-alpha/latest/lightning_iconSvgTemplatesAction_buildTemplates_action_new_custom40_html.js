import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fnew_custom40.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_custom40_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fnew_custom40.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_custom40_scoped_css?scoped=true.js";

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
    "d": "M45.2 8H6.8C4.2 8 2 10.1 2 12.7v26.6C2 41.9 4.2 44 6.8 44h38.4c2.6 0 4.8-2.1 4.8-4.7V12.7c0-2.6-2.2-4.7-4.8-4.7zm0 4.7v4.7H6.8v-4.7h38.4zM6.8 39.3V25.2h38.4v14.1H6.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M20.5 29.1c-1.1 0-2.1.5-2.6 1.4-.1.2-.3.2-.4 0-.6-.9-1.5-1.4-2.6-1.4-1.8 0-3.2 1.4-3.2 3.1 0 1.7 1.4 3.1 3.2 3.1 1.1 0 2.1-.5 2.6-1.4.1-.2.3-.2.4 0 .6.9 1.5 1.4 2.6 1.4h.1c1.7 0 3.1-1.3 3.1-3.1V32c-.1-1.5-1.5-2.9-3.2-2.9zM38.8 29.9h-9.6c-.9 0-1.6.7-1.6 1.6V33c0 .9.7 1.6 1.6 1.6h9.6c.9 0 1.6-.7 1.6-1.6v-1.6c0-.8-.7-1.5-1.6-1.5z"
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
      "viewBox": "0 0 52 52"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom40"
}
