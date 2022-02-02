import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/person_name.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_person_name_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/person_name.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_person_name_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_3/latest/lwc.js";
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
      "d": "M71.7 20H28.17c-4.58 0-8.3 3.56-8.16 7.81v44.38a7 7 0 00.26 2.23A41.24 41.24 0 0128 70.51c4.38-1.8 4.89-3.38 4.89-5.14s-1.29-3.37-2.7-4.76a12.17 12.17 0 01-3.86-9c0-6.81 4.37-12.6 12-12.6s12 5.91 12 12.6a11.29 11.29 0 01-3.86 9c-1.41 1.29-2.7 3-2.7 4.76s.65 3.34 4.89 5.14c5.68 2.32 11 4.95 12.14 9.49h11a8.08 8.08 0 008.2-7.81V27.81A8.12 8.12 0 0071.7 20zM71 45.85a2 2 0 01-2 2H54a2 2 0 01-2-2v-3a2 2 0 012-2h15a2 2 0 012 2zm5-13a2 2 0 01-2 2H54a2 2 0 01-2-2v-3a2 2 0 012-2h20a2 2 0 012 2z",
      "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_person_name"
