import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/announcement.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_announcement_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/announcement.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_announcement_scoped_css?scoped=true.js";

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
    "d": "M22.7 45.4l-1.3-1c-1.4-1-1.4-3-1.4-4v-2.9c0-.8-.7-1.5-1.5-1.5h-6c-.8 0-1.5.7-1.5 1.5v7.7c0 2.7 1.6 4.8 4.1 4.8H20c2.9 0 3.1-2 3.1-2s.5-1.8-.4-2.6zM45 18V4.4v-.1c0-2.4-3-3.1-4.6-1.5l-8.9 8.4c-1.4 1.2-3.2 1.7-5 1.7H11.3C6.1 13 2 17.5 2 22.7v.2c0 5.2 4.1 9.1 9.3 9.1h15.2c1.9 0 3.7.8 5.1 2l8.8 8.6c1.6 1.6 4.6 1 4.6-1.4V27.6c3 0 4.8-2.1 4.8-4.8 0-2.7-1.8-4.8-4.8-4.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_announcement"
}
