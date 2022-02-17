import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/breadcrumbs.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_breadcrumbs_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/breadcrumbs.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_breadcrumbs_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M8.4 42c-.6 0-1-.4-1-1V10.9c0-.6.4-1 1-1h8.1c.4 0 .9.2 1.2.5L29.3 25c.4.5.4 1.3 0 1.9L17.6 41.5c-.3.4-.8.6-1.3.6L8.4 42z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M44.3 25L32.6 10.5c-.5-.6-1.4-.8-2.1-.2l-2.3 1.9c-.7.5-.8 1.5-.2 2.1L37.5 26 28 37.8c-.5.6-.4 1.6.2 2.1l2.3 1.9c.7.5 1.5.4 2.1-.2L44.3 27c.4-.8.4-1.5 0-2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_breadcrumbs"
}
