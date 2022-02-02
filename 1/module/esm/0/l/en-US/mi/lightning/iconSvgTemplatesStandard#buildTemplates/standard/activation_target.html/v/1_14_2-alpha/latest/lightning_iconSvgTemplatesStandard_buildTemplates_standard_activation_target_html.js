import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/activation_target.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_activation_target_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/activation_target.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_activation_target_scoped_css?scoped=true.js";

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
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M75 20.37H57.81a5 5 0 00-5 5v17a5 5 0 005 5H75a5 5 0 005-5v-17a5 5 0 00-5-5zm-1 6v15H58.82v-15zM28 51a1.64 1.64 0 00-1.56 1.71l-.08 3.51A1.64 1.64 0 0028 57.83h6.2a1.08 1.08 0 01.82.33 1.18 1.18 0 01.08 1.71L20.54 74.34a1.68 1.68 0 00-.09 2.37l2.47 2.45a2.12 2.12 0 002.55.08l14.68-14.55a.88.88 0 01.58-.25 1.28 1.28 0 011.4 1.06l.08 5.22a1.64 1.64 0 001.64 1.63l3.54.09A1.65 1.65 0 0049 70.8v-18a1.65 1.65 0 00-1.65-1.64z"
    },
    key: 3,
    svg: true
  }, [])])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_activation_target"
