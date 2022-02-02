import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/search.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_search_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/search.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_search_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_3/latest/lwc.js";
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
      "d": "M79.5 74.1L62.9 57.6c3.4-4.7 5.1-10.7 4.2-17.1C65.6 29.8 56.9 21.3 46 20.3c-14.7-1.5-27.2 11-25.7 25.8 1 10.7 9.5 19.6 20.2 21.1 6.4.9 12.3-.9 17.1-4.2l16.6 16.6c.7.7 1.9.7 2.6 0l2.6-2.6c.8-.9.8-2.1.1-2.9zM27.7 43.7c0-8.8 7.2-16.1 16.1-16.1s16.1 7.2 16.1 16.1-7.2 16.1-16.1 16.1-16.1-7.1-16.1-16.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_search"
