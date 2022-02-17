import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/crossfilter.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_crossfilter_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/crossfilter.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_crossfilter_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M35 9c-1.7 0-3.3.2-4.8.7 1.8 1.5 3.4 3.3 4.7 5.3h.1c6.1 0 11 4.9 11 11s-4.9 11-11 11c-1.5 0-3-.3-4.3-.9.8-1.1 1.5-2.3 2-3.5.2-.5.4-.9.5-1.4.5-1.6.8-3.4.8-5.2 0-9.4-7.6-17-17-17S0 16.6 0 26s7.6 17 17 17c1.7 0 3.3-.2 4.8-.7-1.8-1.5-3.4-3.3-4.7-5.3H17c-6.1 0-11-4.9-11-11s4.9-11 11-11c1.5 0 3 .3 4.4.9C19.3 18.7 18 22.2 18 26c0 9.4 7.6 17 17 17s17-7.6 17-17S44.4 9 35 9z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_crossfilter"
}
