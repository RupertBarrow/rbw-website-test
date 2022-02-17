import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl%23buildTemplates/utility/question_mark.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_question_mark_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl%23buildTemplates/utility/question_mark.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_question_mark_scoped_css?scoped=true.js";

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
    "d": "M26.7 42.8c.8 0 1.5.7 1.5 1.5v3.2c0 .8-.7 1.5-1.5 1.5h-3.2c-.8 0-1.5-.7-1.5-1.5v-3.2c0-.8.7-1.5 1.5-1.5h3.2zM28.2 35.1c0-2.1 1.3-4 3.1-4.8h.1c5.2-2.1 8.8-7.2 8.8-13.2 0-7.8-6.4-14.2-14.2-14.2-7.2 0-13.2 5.3-14.2 12.2v.1c-.1.9.6 1.6 1.5 1.6h3.2c.8 0 1.4-.5 1.5-1.1v-.2c.7-3.7 4-6.5 7.9-6.5 4.5 0 8.1 3.6 8.1 8.1 0 2.1-.8 4-2.1 5.5l-.1.1c-.9 1-2.1 1.6-3.3 2-4 1.4-6.7 5.2-6.7 9.4v1.5c0 .8.6 1.4 1.4 1.4h3.2c.8 0 1.6-.6 1.6-1.5l.2-.4z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_question_mark"
}
