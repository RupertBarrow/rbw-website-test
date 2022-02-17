import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/orchestrator.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_orchestrator_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/orchestrator.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_orchestrator_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M36.4 3.14a1.62 1.62 0 00-2.24-1 1.65 1.65 0 00-.59 2.38l7.28 18.18c.45.95 1.28 1.51 2.21 1.06a1.76 1.76 0 00.63-2.47zM26.2 15.75c4.11 0 7.41 3.74 7.41 8.37s-3.3 8.37-7.41 8.37-7.41-3.74-7.41-8.37 3.3-8.37 7.41-8.37zM9.11 34.34l10.67 1.2L22.24 50h-3a1.87 1.87 0 01-1.79-1.39l-2.18-7.84-9.09-1a4.77 4.77 0 01-3.88-6.3L7 19.79A2.79 2.79 0 0110.52 18a2.86 2.86 0 011.73 3.63L8.33 33.09a.94.94 0 00.78 1.25zM33.36 50h-3.2l2.43-14.29 10.09 1.91a.94.94 0 001.08-1.14l-1.42-6.4a2.85 2.85 0 012.07-3.44 2.8 2.8 0 013.38 2.1L49.87 38a4.73 4.73 0 01-5.38 5.8l-7.7-1.46-1.62 6.27A1.87 1.87 0 0133.36 50zM23.31 37.29a1.1 1.1 0 01-1.68-.95v-1.77a1.1 1.1 0 011.68-1l2.89 1.83zM26.2 35.45l2.88-1.83a1.1 1.1 0 011.69 1v1.77a1.11 1.11 0 01-1.69.95z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_orchestrator"
}
