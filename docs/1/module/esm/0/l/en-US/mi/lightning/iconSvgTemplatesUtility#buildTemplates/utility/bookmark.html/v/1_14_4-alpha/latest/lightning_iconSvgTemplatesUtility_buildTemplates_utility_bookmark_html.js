import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/bookmark.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_bookmark_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/bookmark.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_bookmark_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.3 49.6l-9.9-9.9c-.6-.6-1.5-.6-2.1 0l-10.6 10c-.7.6-1.7.2-1.7-.7V6c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v42.9c0 .9-1.1 1.4-1.7.7z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_bookmark"
}
