import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/quotation_marks.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_quotation_marks_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/quotation_marks.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_quotation_marks_scoped_css?scoped=true.js";

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
    "d": "M44.3 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.4v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6zM19.5 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.6v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_quotation_marks"
}
