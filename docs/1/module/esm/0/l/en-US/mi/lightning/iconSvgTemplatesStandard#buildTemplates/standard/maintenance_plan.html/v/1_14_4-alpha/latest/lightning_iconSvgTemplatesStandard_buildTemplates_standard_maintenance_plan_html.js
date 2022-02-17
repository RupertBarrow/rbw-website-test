import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/maintenance_plan.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_maintenance_plan_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/maintenance_plan.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_maintenance_plan_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M65.7 34h7.9c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.9-.5-1.2L63.5 20c-.3-.3-.7-.5-1.1-.5-.9 0-1.7.8-1.7 1.7v7.9c.2 2.7 2.3 4.8 5 4.9z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M72.7 41H60.5c-4 0-7.2-3.2-7.3-7.2v-12c.1-1.2-.8-2.2-2-2.3H31.6c-4 0-7.2 3.2-7.3 7.2v45.7c0 4 3.3 7.2 7.3 7.2h36.2c4 0 7.2-3.2 7.3-7.2V43.5c.1-1.3-1-2.5-2.4-2.5zm-6.9 30.8c-.8.8-1.8 1.2-3 1.2-1.1 0-2.2-.4-3-1.2L46 58c-.9.4-1.8.6-2.8.7-5.8.7-11-3.5-11.7-9.3-.2-1.5 0-3 .4-4.4.1-.4.6-.5 1-.2l6 6c.4.5 1.2.5 1.6.1 0 0 .1 0 .1-.1l4.2-4.2c.5-.4.5-1.2.1-1.6 0 0 0-.1-.1-.1l-6-6c-.2-.2-.2-.6 0-.9.1-.1.1-.1.2-.1 1-.2 2.1-.4 3.1-.4 5.9 0 10.6 4.7 10.7 10.6 0 .4 0 .8-.1 1.2-.1 1-.4 1.9-.7 2.8L65.8 66c1.6 1.6 1.6 4.2 0 5.8z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_maintenance_plan"
}
