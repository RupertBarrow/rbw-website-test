import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/help_doc_ext.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_help_doc_ext_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/help_doc_ext.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_help_doc_ext_scoped_css?scoped=true.js";

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
    "d": "M49.83 32.45A1.43 1.43 0 0048.44 31h-12A1.43 1.43 0 0035 32.44v1.44a1.43 1.43 0 001.4 1.44h6.14l-11 11a1.42 1.42 0 000 2l1 1a1.54 1.54 0 001.09.45 1.32 1.32 0 00.94-.38l11-11v6A1.43 1.43 0 0047 45.83h1.53a1.43 1.43 0 001.47-1.4zM19.91 32.07h-4.08A1.12 1.12 0 0114.68 31v-1.3a8.18 8.18 0 015.47-7.7 6.16 6.16 0 002.61-1.71 6.56 6.56 0 00-9.38-9.15 5.77 5.77 0 00-1.88 3.6 1.17 1.17 0 01-1.23.89H6.19A1.17 1.17 0 015 14.46v-.1a13.31 13.31 0 013.89-8.08 13.38 13.38 0 019.55-3.68 13.1 13.1 0 014 25.39 1.83 1.83 0 00-1.23 1.63v1.23a1.27 1.27 0 01-1.3 1.22zm1.3 8.57A1.24 1.24 0 0120 41.87h-4.09a1.27 1.27 0 01-1.23-1.23v-4.08a1.25 1.25 0 011.23-1.22H20a1.25 1.25 0 011.22 1.22z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_help_doc_ext"
}
