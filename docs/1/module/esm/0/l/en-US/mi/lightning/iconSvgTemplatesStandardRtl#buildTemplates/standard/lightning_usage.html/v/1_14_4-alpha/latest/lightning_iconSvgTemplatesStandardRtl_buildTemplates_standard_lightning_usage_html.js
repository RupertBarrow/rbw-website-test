import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/lightning_usage.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_lightning_usage_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/lightning_usage.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_lightning_usage_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M79 20.9c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v50c0 1-.9 1.9-1.9 1.9H21c-1.1 0-2 .9-2 2v2.1c0 1.1.9 2 2 2h53c2.8 0 5-2.2 5-5v-53zM61.4 57L47.6 43.1l-7.8 7.7c-.5.6-1.3.9-2.1.9s-1.5-.3-2.1-.9L20.1 35.1c-1.2-1.1-1.2-3 0-4.2 1.1-1.2 3-1.2 4.2 0l13.5 13.7 7.7-7.7c1.1-1.2 3-1.2 4.2 0l16 15.9c1.2 1.1 1.2 3 0 4.2-.6.6-1.3.9-2.1.9s-1.6-.3-2.2-.9z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_lightning_usage"
}
