import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/solution.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_solution_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/solution.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_solution_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.6 20.1c-9.8 1.1-17.7 8.8-18.5 18.4-.6 7 2.5 13.4 7.5 17.5 1.5 1.2 2.4 3 2.4 4.9v.1c0 2.8 2.3 5.1 5.2 5.1h11.6c2.9 0 5.2-2.3 5.2-5.1v-.1c0-1.9.9-3.7 2.4-4.9C68 52.2 71 46.6 71 40.3c0-12-10.7-21.5-23.4-20.2zM59 72H41c-1.1 0-2 .9-2 2 0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6 0-1.1-.9-2-2-2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_solution"
}
