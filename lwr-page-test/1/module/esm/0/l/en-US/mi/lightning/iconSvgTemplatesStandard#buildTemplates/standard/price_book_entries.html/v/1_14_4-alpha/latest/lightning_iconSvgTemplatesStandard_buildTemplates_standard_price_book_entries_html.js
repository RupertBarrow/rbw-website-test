import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fprice_book_entries.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_price_book_entries_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fprice_book_entries.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_price_book_entries_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48.8 20l14.8.3a5.45 5.45 0 013.1 1.3l5.8 5.8 5.8 5.8a4.39 4.39 0 011.3 3.1l.4 14.9a4.45 4.45 0 01-1.3 3.2L54.4 78.7a4.53 4.53 0 01-6.3 0L34.7 65.3 21.3 51.9a4.53 4.53 0 010-6.3l24.3-24.3a4.45 4.45 0 013.2-1.3zm-8.2 23.7L38.2 46a1 1 0 000 1.6l14.2 14.2a1 1 0 001.6 0l2.4-2.4a1 1 0 000-1.6L42.1 43.7a.94.94 0 00-1.5 0zm6.7-6.8l-2.4 2.4a1 1 0 000 1.6l14.2 14.2a1 1 0 001.6 0l2.4-2.4a1 1 0 000-1.6L48.9 36.9a1.22 1.22 0 00-1.6 0zm22.9-7.1a4.45 4.45 0 100 6.3 4.53 4.53 0 000-6.3z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_price_book_entries"
}
