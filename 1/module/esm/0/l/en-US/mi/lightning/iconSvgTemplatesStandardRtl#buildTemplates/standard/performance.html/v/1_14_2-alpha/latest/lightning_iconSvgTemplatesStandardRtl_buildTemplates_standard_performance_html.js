import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/performance.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_performance_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/performance.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_performance_scoped_css?scoped=true.js";

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
      "d": "M30 20h-2c-3.3 0-6 3-6 6v48c0 3 2.7 6 6 6h2c1.1 0 2-.9 2-2V22c0-1.1-.9-2-2-2zM72 20H40c-1.1 0-2 .9-2 2v56c0 1.1.9 2 2 2h32c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6zm-2.2 26.8l-5.2 5.3c-.1.1-.2.4-.2.6l1.2 7.5c.1.5-.4.9-.9.7l-6.5-3.6c-.2-.1-.4-.1-.6 0l-6.5 3.6c-.5.2-1-.2-.9-.7l1.2-7.5c0-.2 0-.4-.2-.6L46 46.8c-.4-.4-.2-1 .3-1.1l7.2-1.1c.2 0 .4-.2.5-.4l3.2-6.9c.2-.5.9-.5 1.1 0l3.2 6.9c.1.2.3.3.5.4l7.2 1.1c.8.1 1 .7.6 1.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_performance"
