import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/problem.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_problem_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/problem.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_problem_scoped_css?scoped=true.js";

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
      "d": "M37.5 30h4a.94.94 0 001-1v-3h14v3a.94.94 0 001 1h4a.94.94 0 001-1v-3a6 6 0 00-6-6h-14a6 6 0 00-6 6v3a.94.94 0 001 1zM73.5 36h-48a6 6 0 00-6 6v32a6 6 0 006 6h48a6 6 0 006-6V42a6 6 0 00-6-6zM51.3 74.24a1 1 0 01-1 1H47a1 1 0 01-1-1v-3.47a1.05 1.05 0 011-1h3.32a1 1 0 011 1zm1-10.77a1.54 1.54 0 00-1 1.39v1a1 1 0 01-1.06 1h-3.32A.93.93 0 0146 66v-1a7 7 0 014.45-6.53 5 5 0 002.12-1.46 5.59 5.59 0 00-3.71-9.32 5.26 5.26 0 00-3.92 1.53 5 5 0 00-1.52 3.06 1 1 0 01-1 .77H39.1a1 1 0 01-1-1.12A11.55 11.55 0 0141.29 45a10.6 10.6 0 017.76-3.12 10.94 10.94 0 0110.21 10.7 11.15 11.15 0 01-6.96 10.89z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_problem"
