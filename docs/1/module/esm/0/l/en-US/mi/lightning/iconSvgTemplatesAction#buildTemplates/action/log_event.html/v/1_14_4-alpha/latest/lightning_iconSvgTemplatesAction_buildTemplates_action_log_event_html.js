import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/log_event.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_log_event_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/log_event.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_log_event_scoped_css?scoped=true.js";

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
    "d": "M38.7 40.2l-4.8 1.6c-.4.1-.9.2-1.3.2-1.4 0-2.8-.7-3.7-1.8-.9-1.1-1.1-2.7-.8-4.1l1.6-5.7 7.5-7.5c.3-.3.1-.9-.4-.9H5.5c-.8 0-1.5.7-1.5 1.5V42c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-.8c0-.7-.7-1.2-1.3-1zM5.5 18h33c.8 0 1.5-.7 1.5-1.5V14c0-2.2-1.8-4-4-4h-3V9c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v1H17V9c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v1H8c-2.2 0-4 1.8-4 4v2.5c0 .8.7 1.5 1.5 1.5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M43.5 23.1c-.2-.2-.5-.2-.7 0l-9.4 9.4-1.4 4.7c-.1.5.3.9.8.8l4.7-1.4 9.4-9.4c.2-.2.2-.5 0-.7l-3.4-3.4zM51.5 20.2l-1.8-1.8c-.6-.6-1.7-.6-2.4 0 0 0-1.1 1.1-1.6 1.7-.2.2-.2.5 0 .7l3.4 3.4c.2.2.5.2.7 0 .6-.6 1.7-1.6 1.7-1.6.7-.6.7-1.7 0-2.4z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_log_event"
}
