import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/new_custom20.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_custom20_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/new_custom20.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_custom20_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
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
    "d": "M16.4 24.2c0-.6-.8-1-1.3-.6L3.9 32.1C2.7 33 2 34.5 2 36v3.3c0 .6.6 1 1 .7l12.3-4.6c.6-.2 1-.8 1-1.5.1-.1.1-9.7.1-9.7zM34.1 46.5l-3.3-2.2V8.1c0-2.2-2.3-4.6-3.8-5.8-.6-.5-1.4-.5-2 0-1.4 1.2-3.8 3.6-3.8 5.8V44.4l-3.7 2.4c-.6.5-1.1 1.2-1.1 2v.5c0 .4.3.7.7.7h17.7c.4 0 .9-.3.9-.7-.1-1.2-.7-2.1-1.6-2.8zM48.1 32.1l-11.2-8.6c-.6-.4-1.3 0-1.3.6v9.8c0 .6.4 1.3 1 1.5L49 40.1c.6.2 1-.2 1-.7v-3.3c0-1.6-.7-3.1-1.9-4z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom20"
}
