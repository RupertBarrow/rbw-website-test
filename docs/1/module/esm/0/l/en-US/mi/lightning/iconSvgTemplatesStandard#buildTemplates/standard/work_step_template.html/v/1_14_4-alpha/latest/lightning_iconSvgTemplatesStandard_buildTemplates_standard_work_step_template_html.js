import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/work_step_template.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_work_step_template_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/work_step_template.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_work_step_template_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M28.5 68.5v-34h-1.6a4.89 4.89 0 00-4.8 4.9v35.4a4.89 4.89 0 004.8 4.9h35.6a4.89 4.89 0 004.8-4.9v-1.4h-34a4.89 4.89 0 01-4.8-4.9zM46.4 30.2h17.7a1.58 1.58 0 001.6-1.6v-3.3a4.89 4.89 0 00-4.8-4.9H49.6a4.82 4.82 0 00-4.8 4.9v3.3a1.64 1.64 0 001.6 1.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M73 24.4h-1.6a.74.74 0 00-.8.8v3.3a6.57 6.57 0 01-6.5 6.6H46.4a6.64 6.64 0 01-6.5-6.6v-3.3a.74.74 0 00-.8-.8h-1.6a4.82 4.82 0 00-4.8 4.9v35.3a4.89 4.89 0 004.8 4.9H73a4.82 4.82 0 004.8-4.9V29.4a4.85 4.85 0 00-4.8-5zM60.9 55.5a1.58 1.58 0 01-1.6 1.6H43.1a1.58 1.58 0 01-1.6-1.6v-1.6a1.58 1.58 0 011.6-1.6h16.2a1.58 1.58 0 011.6 1.6zm8.1-8.2a1.58 1.58 0 01-1.6 1.6H43.1a1.58 1.58 0 01-1.6-1.6v-1.6a1.58 1.58 0 011.6-1.6h24.3a1.58 1.58 0 011.6 1.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_work_step_template"
}
