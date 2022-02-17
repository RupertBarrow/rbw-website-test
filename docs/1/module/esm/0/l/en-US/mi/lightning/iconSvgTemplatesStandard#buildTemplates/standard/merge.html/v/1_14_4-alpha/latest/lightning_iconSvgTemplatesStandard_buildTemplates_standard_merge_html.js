import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/merge.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_merge_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/merge.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_merge_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M70.5 72.5c-7-3.4-12-9.4-14.5-16.3-1-2.6-1.6-5.3-1.9-7.9v-4.4h13.6c1.1 0 1.7-1.2 1-2.2L51 20.5c-.6-.8-2-.8-2.5 0L31.2 41.7c-.6.8 0 2.2 1 2.2h13.7V48.3c-.3 2.7-1 5.5-1.9 7.9-2.6 6.8-7.5 12.9-14.5 16.3-1 .4-1.4 1.6-1 2.6l1.6 3.8c.5 1.1 1.6 1.4 2.7.8 7.6-3.6 13.5-9.4 17.2-16.2 3.7 6.9 9.6 12.6 17.3 16.2 1.1.5 2.2.4 2.7-.8l1.6-3.8c.4-1-.1-2.2-1.1-2.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_merge"
}
