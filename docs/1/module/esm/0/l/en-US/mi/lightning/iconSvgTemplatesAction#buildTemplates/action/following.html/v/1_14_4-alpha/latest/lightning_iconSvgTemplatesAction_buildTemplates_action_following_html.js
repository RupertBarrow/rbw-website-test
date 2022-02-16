import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Ffollowing.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_following_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Ffollowing.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_following_scoped_css?scoped=true.js";

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
    "d": "M49.5 33.6l-2.2-2.2c-.6-.6-1.6-.6-2.2 0L35.7 41c-.4.4-1.1.4-1.5 0l-4.4-4.5c-.6-.6-1.6-.6-2.2 0l-2.2 2.2c-.6.6-.6 1.6 0 2.2l8.4 8.6c.6.6 1.6.6 2.2 0l13.4-13.7c.7-.5.7-1.5.1-2.2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M24.7 33.8c1-1 2.2-1.6 3.6-1.8 1.7-.1 3.3.4 4.5 1.6L35 36l7.2-7.4c.8-.8 1.8-1.4 2.9-1.6.5-.1.8-.5.8-1V6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v36c0 2.2 1.8 4 4 4h16.4c.9 0 1.3-1.1.7-1.7l-.5-.5c-2.1-2.2-2.1-5.7 0-7.9l2.1-2.1zM26 11c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H27c-.6 0-1-.4-1-1v-2zm0 8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H27c-.6 0-1-.4-1-1v-2zm-16-8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1V11zm8 26c0 .6-.4 1-.9 1H11c-.5 0-.9-.4-.9-1v-2c0-.6.4-1 .9-1h6.1c.5 0 .9.4.9 1v2zm-7-7c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H11z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_following"
}
