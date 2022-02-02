import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/textarea.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_textarea_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/textarea.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_textarea_scoped_css?scoped=true.js";

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
      "d": "M74 80H26c-3.3 0-6-2.7-6-6V26c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6v48c0 3.3-2.7 6-6 6zM28.1 30v40c0 1.1.9 2 2 2H70c1.1 0 2-.9 2-2V30c0-1.1-.9-2-2-2H30.1c-1.1 0-2 .9-2 2z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M61.9 51.2c1 0 2 .9 2 2v8.7c0 1.1-.9 2-2 2h-9.2c-1.1 0-2-.9-2-2 0-.7.3-1.3.8-1.8l1.9-1.9c1.3-1.2 2.7-2.4 4-3.6.9-.8 1.8-1.7 2.8-2.5.3-.2.5-.5.8-.6.3-.2.6-.3.9-.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_textarea"
