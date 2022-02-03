import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/custom.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_custom_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/custom.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_custom_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
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
      "d": "M79.2 32.8c-.2-.7-1.101-.9-1.7-.4L67.4 42.5c-.801.8-2 .8-2.801 0l-7.1-7.1c-.8-.8-.8-2 0-2.8l10.2-10.2c.5-.5.3-1.4-.4-1.7C65.6 20.3 63.8 20 62 20c-10.6 0-19.1 9.2-17.9 20 .2 1.7.6 3.2 1.2 4.7L22 68.1c-2.7 2.7-2.7 7.2 0 9.9 1.4 1.4 3.2 2.1 5 2.1s3.6-.699 5-2.1l23.3-23.3c1.5.6 3.101 1 4.7 1.2 10.9 1.2 20-7.3 20-17.9 0-1.8-.3-3.6-.8-5.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_custom"
