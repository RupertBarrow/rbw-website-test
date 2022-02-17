import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fstage_collection.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_stage_collection_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fstage_collection.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_stage_collection_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "cx": "25.9",
    "cy": "26",
    "r": "3.4"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M46.7 22.6c-1.2 0-2.3.7-2.9 1.6h-3.6c-.9-7.1-6.9-12.6-14.3-12.6s-13.4 5.5-14.3 12.6H8.3c-.6-1-1.7-1.6-2.9-1.6C3.5 22.6 2 24.1 2 26s1.5 3.4 3.4 3.4c1.2 0 2.2-.6 2.8-1.6h3.5c.9 7.1 7 12.6 14.3 12.6 7.3 0 13.3-5.5 14.3-12.6h3.6c.6.9 1.6 1.6 2.8 1.6 1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4zM26 35.6c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.4 9.6-9.6 9.6z"
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
  }, [api_element("g", stc0, [api_element("circle", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_stage_collection"
}
