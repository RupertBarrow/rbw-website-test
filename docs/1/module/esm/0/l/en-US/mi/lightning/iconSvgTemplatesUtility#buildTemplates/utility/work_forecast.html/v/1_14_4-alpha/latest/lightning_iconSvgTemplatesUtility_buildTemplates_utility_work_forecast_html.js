import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/work_forecast.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_work_forecast_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/work_forecast.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_work_forecast_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44.88 11.82s-2.38-4.91-7.7-4.91S29.34 12 29.34 12a7.94 7.94 0 00-6.75 0s-2.45-5.05-7.77-5.05-7.7 4.91-7.7 4.91S2.14 22.93 2 32.89s6.48 12.2 9.61 12.2c3.41 0 11.46-1.43 11.05-12.61a3.26 3.26 0 013.07-1.84 4.06 4.06 0 013.68 1.84C29 43.66 37 45.09 40.39 45.09c3.06 0 9.74-2.39 9.61-12.2s-5.12-21.07-5.12-21.07zM12.23 40.73a5.94 5.94 0 115.93-5.94 5.94 5.94 0 01-5.93 5.94zm27.54 0a5.94 5.94 0 115.93-5.94 5.94 5.94 0 01-5.93 5.94z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_work_forecast"
}
