import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/merge.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_merge_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/merge.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_merge_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_3/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M42.3 44c-5.6-2.7-9.6-7.5-11.6-13-.8-2-1.3-4.3-1.5-6.3v-3.5H40c.8 0 1.4-.9.8-1.8l-14.2-17c-.5-.6-1.6-.6-2 0l-13.8 17c-.5.6 0 1.8.8 1.8h10.9v3.5c-.3 2.1-.8 4.4-1.5 6.3-2 5.5-6 10.3-11.6 13-.8.3-1.1 1.3-.8 2l1.3 3.1c.4.8 1.3 1.1 2.1.6 6-2.9 10.8-7.5 13.7-13 3 5.5 7.7 10.1 13.8 13 .8.4 1.8.3 2.1-.6l1.3-3.1c.6-.7.2-1.6-.6-2z"
    },
    key: 2,
    svg: true
  }, [])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_merge"
