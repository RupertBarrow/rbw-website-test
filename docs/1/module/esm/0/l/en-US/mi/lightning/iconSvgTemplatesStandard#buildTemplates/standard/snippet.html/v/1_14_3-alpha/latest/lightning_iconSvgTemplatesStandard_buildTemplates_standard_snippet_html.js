import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fsnippet.css%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_snippet_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fsnippet.scoped.css?scoped=true%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_snippet_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M74.1 23.9c-12.1 0-21.3 9.4-21.3 21.4v28.8c0 1.1.9 2 2 2h22.8c1.1 0 2-.9 2-2V51.3c0-1.1-.9-2-2-2H60.8v-4c0-6.7 6.6-13.4 13.3-13.4h3.5c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-3.5zm-33.3 0c-12.1 0-21.3 9.4-21.3 21.4v28.8c0 1.1.9 2 2 2h22.8c1.1 0 2-.9 2-2V51.3c0-1.1-.9-2-2-2H27.6v-4c0-6.7 6.6-13.4 13.3-13.4h3.5c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-3.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_snippet"
