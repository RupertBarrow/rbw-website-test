import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/service_territory.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_service_territory_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/service_territory.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_service_territory_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M56.63 62.11a7.39 7.39 0 01-7.42-7.22 7.27 7.27 0 017.42-7.22 7.22 7.22 0 110 14.43z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M71.83 20H28.3a8.11 8.11 0 00-8.3 7.81v44.38A8.08 8.08 0 0028.16 80h24.41C47.5 75.48 39 66.22 39 56.46a17.32 17.32 0 0134.65 0c0 9.82-8.55 19-13.61 23.54h11.79A8.08 8.08 0 0080 72.19V27.81c.14-4.25-3.58-7.81-8.17-7.81zM47.61 33.35a2.85 2.85 0 01-2.76 2.75H30.78A2.85 2.85 0 0128 33.35V30.6a2.85 2.85 0 012.76-2.75h14.09a2.85 2.85 0 012.76 2.75z",
    "fill-rule": "evenodd"
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
      "viewBox": "0 0 100 100"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_service_territory"
}
