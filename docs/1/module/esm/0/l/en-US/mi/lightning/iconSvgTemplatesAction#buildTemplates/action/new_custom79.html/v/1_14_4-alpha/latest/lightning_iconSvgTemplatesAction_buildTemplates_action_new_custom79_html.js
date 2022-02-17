import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/new_custom79.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_custom79_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/new_custom79.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_custom79_scoped_css?scoped=true.js";

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
    "d": "M17.8 19.3c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2-2.3-5.2-5.2-5.2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M47.8 35.6H33.5v-5.9H35c.8 0 1.5-.7 1.5-1.5v-4.4c0-.8-.7-1.5-1.5-1.5h-1.7C32.1 14.9 25.8 9.2 18 9 9.1 8.9 1.9 16 2 24.7 2.2 33.3 9.4 40 18.1 40h27.4v1.5c0 .8.7 1.5 1.5 1.5h1.5c.8 0 1.5-.7 1.5-1.5v-3.7c0-1.2-1-2.2-2.2-2.2zm-30-1.5c-5.4 0-9.7-4.3-9.7-9.6s4.3-9.6 9.7-9.6 9.7 4.3 9.7 9.6-4.3 9.6-9.7 9.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom79"
}
