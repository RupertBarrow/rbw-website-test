import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/metrics.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_metrics_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/metrics.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_metrics_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44.9 2H7.1C4.3 2 2 4.3 2 7.1v37.7C2 47.7 4.3 50 7.1 50h37.7c2.8 0 5.1-2.3 5.1-5.1V7.1c.1-2.8-2.2-5.1-5-5.1zM15.7 39.7c0 .9-.8 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-9.4c0-.9.8-1.7 1.7-1.7H14c.9 0 1.7.8 1.7 1.7v9.4zm8.6 0c0 .9-.8 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7V17.4c0-.9.8-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v22.3zm8.6 0c0 .9-.8 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7V12.3c0-.9.8-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v27.4zm8.5 0c0 .9-.8 1.7-1.7 1.7H38c-.9 0-1.7-.8-1.7-1.7V23.4c0-.9.8-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v16.3z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_metrics"
}
