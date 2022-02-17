import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/turn_off_notifications.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_turn_off_notifications_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/turn_off_notifications.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_turn_off_notifications_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M23.4 26.6c.6.6 1.4.6 2 0L46.8 6.9c.4-.7.3-1.9-1.2-1.9H3.4c-1.1 0-2 1.1-1.2 2l21.2 19.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M30.1 37.6c.5-5.6 5-10.2 10.7-10.8.5 0 1-.1 1.4-.1 1.8 0 3.4.4 4.9 1V15.3c0-1-1.2-1.5-1.9-.8L28.6 29.9c-1.1 1-2.6 1.6-4.1 1.6s-3-.6-4.1-1.6L3.8 14.5c-.8-.7-1.9-.2-1.9.8v19.6c0 2.5 2.1 4.6 4.6 4.6h23.7c-.1-.6-.1-1.3-.1-1.9z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M42.1 31c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm6 9.6c0 .2-.2.4-.5.4h-11c-.3 0-.5-.2-.5-.4v-3.2c0-.2.2-.4.5-.4h11c.3 0 .5.2.5.4v3.2z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_turn_off_notifications"
}
