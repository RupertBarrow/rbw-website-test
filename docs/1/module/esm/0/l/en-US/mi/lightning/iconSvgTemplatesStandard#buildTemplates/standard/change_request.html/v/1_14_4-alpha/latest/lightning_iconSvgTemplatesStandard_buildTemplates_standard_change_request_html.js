import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/change_request.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_change_request_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/change_request.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_change_request_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.5 30h4a.94.94 0 001-1v-3h14v3a.94.94 0 001 1h4a.94.94 0 001-1v-3a6 6 0 00-6-6h-14a6 6 0 00-6 6v3a.94.94 0 001 1zM73.5 36h-48a6 6 0 00-6 6v32a6 6 0 006 6h48a6 6 0 006-6V42a6 6 0 00-6-6zM46.19 58.63l-7.69 7.91a1.19 1.19 0 01-1.35 0l-7.69-7.91c-.58-.48-.1-1.33.86-1.33H35a15 15 0 0115.3-15.24v5.71c-4.81 0-9.53 4.77-9.53 9.53h4.52c1 0 1.48.76.9 1.33zm24.25-.05h-4.71a15.2 15.2 0 01-15.48 15.24v-5.71C56 68.11 60 64.3 60 58.58h-4.66c-1 0-1.44-.76-.86-1.33l7.69-7.9a1.16 1.16 0 011.35 0l7.79 7.9c.58.48.1 1.33-.87 1.33z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_change_request"
}
