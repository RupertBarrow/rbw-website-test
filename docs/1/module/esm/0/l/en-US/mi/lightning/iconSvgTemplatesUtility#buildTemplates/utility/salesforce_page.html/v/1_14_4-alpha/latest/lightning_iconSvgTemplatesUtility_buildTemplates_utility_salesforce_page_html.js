import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/salesforce_page.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_salesforce_page_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/salesforce_page.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_salesforce_page_scoped_css?scoped=true.js";

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
    "d": "M44.44 19H33.2a3.89 3.89 0 01-4.2-3.55 3.53 3.53 0 010-.65V3.6A1.58 1.58 0 0027.44 2H10.8A4.87 4.87 0 006 6.8v38.4a4.87 4.87 0 004.8 4.8h30.4a4.87 4.87 0 004.8-4.8V20.6a1.58 1.58 0 00-1.56-1.6zM33.59 39.35a3.92 3.92 0 01-1.08-.1 4.19 4.19 0 01-3.68 2.16A5.24 5.24 0 0127 41a4.88 4.88 0 01-4.43 2.91A4.72 4.72 0 0118 40.78c-.22 0-.65.11-1 .11a4.49 4.49 0 01-4.54-4.42 4.39 4.39 0 012.27-3.89 6.33 6.33 0 01-.44-2.06 5.26 5.26 0 015.19-5.18 5.92 5.92 0 014.06 2.14A4.79 4.79 0 0127 26.06a4.91 4.91 0 014.21 2.38 7.49 7.49 0 012.38-.54 5.93 5.93 0 015.83 5.73 5.85 5.85 0 01-5.83 5.72z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M36.4 15h8.5a1.2 1.2 0 001.1-1.2 1.4 1.4 0 00-.3-.9L35.1 2.3a1.4 1.4 0 00-.9-.3A1.2 1.2 0 0033 3.1v8.5a3.49 3.49 0 003.4 3.4z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_salesforce_page"
}
