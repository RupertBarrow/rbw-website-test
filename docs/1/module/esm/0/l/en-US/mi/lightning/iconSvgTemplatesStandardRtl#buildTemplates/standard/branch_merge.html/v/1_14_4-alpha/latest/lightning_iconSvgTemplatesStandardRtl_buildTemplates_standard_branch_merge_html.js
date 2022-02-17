import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/branch_merge.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_branch_merge_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/branch_merge.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_branch_merge_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74.2 71.6L78 70c1.2-.5 1.3-1.6.8-2.7-3.6-7.7-9.3-13.6-16.2-17.3 6.8-3.7 12.6-9.6 16.2-17.2.6-1.1.3-2.2-.8-2.7l-3.8-1.6c-1-.4-2.2 0-2.6 1-3.4 7-9.5 11.9-16.3 14.5-2.4.9-5.2 1.6-7.9 1.9H43V32.2c0-1-1.4-1.6-2.2-1L19.6 48.5c-.8.5-.8 1.9 0 2.5l21.2 17.7c1 .7 2.2.1 2.2-1V54.1h4.4c2.6.3 5.3.9 7.9 1.9 6.9 2.5 12.9 7.5 16.3 14.5.4 1 1.6 1.5 2.6 1.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_branch_merge"
}
