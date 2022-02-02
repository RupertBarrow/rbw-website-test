import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/arrowup.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_arrowup_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/arrowup.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_arrowup_scoped_css?scoped=true.js";

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
      "d": "M41.4 21c.8-.8.8-1.9 0-2.7l-15-14.7c-.8-.8-2-.8-2.8 0l-15 14.7c-.8.8-.8 1.9 0 2.7l2.8 2.7c.8.8 2 .8 2.8 0l4.7-4.6c.8-.8 2.2-.2 2.2.9v27c0 1 .9 2 2 2h4c1.1 0 2-1.1 2-2V20c0-1.2 1.4-1.7 2.2-.9l4.7 4.6c.8.8 2 .8 2.8 0l2.6-2.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_arrowup"
