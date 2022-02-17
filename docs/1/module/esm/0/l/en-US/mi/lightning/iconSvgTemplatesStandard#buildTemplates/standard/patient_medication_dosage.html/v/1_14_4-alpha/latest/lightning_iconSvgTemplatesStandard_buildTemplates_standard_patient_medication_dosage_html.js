import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fpatient_medication_dosage.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_patient_medication_dosage_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fpatient_medication_dosage.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_patient_medication_dosage_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73.79 20H26.21A6.22 6.22 0 0020 26.21v47.58A6.22 6.22 0 0026.21 80h47.58A6.22 6.22 0 0080 73.79V26.21A6.22 6.22 0 0073.79 20zm0 8.28v43.44a2.06 2.06 0 01-2.06 2.07H28.28a2.06 2.06 0 01-2.07-2.06V28.28a2.06 2.06 0 012.06-2.07h43.45a2.06 2.06 0 012.07 2.06z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M61.87 52.66a7.26 7.26 0 00-6.4 4.34.49.49 0 00.25.63h.13l12.91 2.47a.49.49 0 00.58-.37.21.21 0 000-.11 7.24 7.24 0 00-7.47-6.96zM68.52 62.15h-.14l-12.89-2.49a.5.5 0 00-.59.42.13.13 0 000 .06 7.24 7.24 0 0013.87 2.64.48.48 0 00-.25-.63zM65.52 37.65a.48.48 0 00.39-.56V37a7.23 7.23 0 00-13.83 2.81.48.48 0 00.47.49h.12zM62.21 46.54a7.22 7.22 0 004.27-6.44.48.48 0 00-.46-.5h-.14L53 42.22a.48.48 0 00-.39.56v.1a7.23 7.23 0 009.6 3.66zM45.18 38.38a7.18 7.18 0 10-14 3.33l1.94 8.17 14-3.33zM48 50.15l-14 3.3 2 8.22a7.17 7.17 0 0014-3.34z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_patient_medication_dosage"
}
