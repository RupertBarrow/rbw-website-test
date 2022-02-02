import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/folder.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_folder_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/folder.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_folder_scoped_css?scoped=true.js";

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
      "d": "M75 34.7H46.6c-1.8 0-3.4-1-4.4-2.5l-4.4-7.6C37 23 35.4 22 33.5 22H25c-2.8 0-5 2.3-5 5.1v45.8c0 2.8 2.2 5.1 5 5.1h50c2.8 0 5-2.3 5-5.1V39.8c0-2.8-2.2-5.1-5-5.1z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M75 24.5H44.9c-.5 0-.8.5-.5.9l2 3.4c.2.5.6.8 1.1.8H75c1.4 0 2.8.3 3.9.8.5.3 1.1-.1 1.1-.8 0-2.8-2.2-5.1-5-5.1z"
    },
    key: 3,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_folder"
