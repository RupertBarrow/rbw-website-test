import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/thunder.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_thunder_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/thunder.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_thunder_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M30.349 3.077a3.704 3.704 0 00-5.222 0l-22.05 22.05a3.702 3.702 0 000 5.221L14.82 42.092a3.703 3.703 0 005.222 0l22.05-22.05a3.706 3.706 0 000-5.222L30.349 3.077zM12.177 5.009c-.522-.522-1.436-.522-1.958 0l-5.204 5.204c-.522.522-.522 1.437 0 1.958l1.958 1.958c.522.521 1.436.521 1.958 0l5.205-5.205c.522-.522.522-1.436 0-1.958l-1.959-1.957zM31.062 36.261c-.522.522-.521 1.437 0 1.958l11.363 11.389c.522.522 1.436.522 1.959 0l5.225-5.225c.521-.521.522-1.436 0-1.959L38.245 31.036c-.522-.522-1.438-.521-1.96 0l-5.223 5.225z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_thunder"
}
