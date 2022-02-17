import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/problem.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_problem_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/problem.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_problem_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M16.4 10h3.2a.76.76 0 00.8-.8V6.8h11.2v2.4a.76.76 0 00.8.8h3.2a.76.76 0 00.8-.8V6.8A4.81 4.81 0 0031.6 2H20.4a4.81 4.81 0 00-4.8 4.8v2.4a.76.76 0 00.8.8zM45.2 14.8H6.8A4.81 4.81 0 002 19.6v25.6A4.81 4.81 0 006.8 50h38.4a4.81 4.81 0 004.8-4.8V19.6a4.81 4.81 0 00-4.8-4.8zM27.44 45.39a.84.84 0 01-.79.84H24a.84.84 0 01-.79-.84v-2.78a.83.83 0 01.79-.83h2.66a.83.83 0 01.79.83zm.8-8.61a1.23 1.23 0 00-.8 1.11v.83a.84.84 0 01-.85.83h-2.65a.73.73 0 01-.74-.77v-.84a5.55 5.55 0 013.55-5.22 4 4 0 001.7-1.17 4.47 4.47 0 00-3-7.45 4.16 4.16 0 00-3.13 1.22 4 4 0 00-1.22 2.45.79.79 0 01-.8.61h-2.62a.79.79 0 01-.8-.89A9.24 9.24 0 0119.43 22a8.45 8.45 0 016.21-2.5 8.74 8.74 0 018.17 8.56 8.92 8.92 0 01-5.57 8.72z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_problem"
}
