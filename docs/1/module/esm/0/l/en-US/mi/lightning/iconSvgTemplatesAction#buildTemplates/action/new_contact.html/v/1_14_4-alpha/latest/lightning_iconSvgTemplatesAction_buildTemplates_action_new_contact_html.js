import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/new_contact.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_contact_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/new_contact.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_contact_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46 9H6c-2.7 0-5 2.2-5 5v24c0 2.7 2.3 5 5 5h40c2.8 0 5-2.2 5-5V14c0-2.8-2.2-5-5-5zM24.8 37.2H10.4c-1.6 0-2.8-1.7-2.8-3.4.1-2.5 2.7-4 5.4-5.2 1.9-.8 2.2-1.6 2.2-2.4 0-.8-.5-1.6-1.2-2.2-1.1-1-1.7-2.5-1.7-4.1 0-3.2 1.9-5.8 5.2-5.8s5.2 2.7 5.2 5.8c0 1.7-.6 3.2-1.7 4.1-.7.6-1.2 1.3-1.2 2.2 0 .8.2 1.6 2.2 2.3 2.7 1.2 5.3 2.8 5.4 5.3.3 1.7-1 3.4-2.6 3.4zm19.5-5.8c0 .9-.8 1.7-1.7 1.7h-7.5c-.9 0-1.7-.7-1.7-1.7v-2.5c0-.9.8-1.7 1.7-1.7h7.5c.9 0 1.7.7 1.7 1.7v2.5zm0-9.1c0 .9-.8 1.7-1.7 1.7H30.2c-.9 0-1.7-.7-1.7-1.7v-2.5c0-.9.8-1.7 1.7-1.7h12.5c.9 0 1.7.7 1.7 1.7v2.5z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_contact"
}
