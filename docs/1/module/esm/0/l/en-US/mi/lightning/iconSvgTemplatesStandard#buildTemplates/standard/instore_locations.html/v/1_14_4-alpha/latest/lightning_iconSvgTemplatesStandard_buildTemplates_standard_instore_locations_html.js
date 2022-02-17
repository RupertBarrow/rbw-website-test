import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Finstore_locations.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_instore_locations_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Finstore_locations.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_instore_locations_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
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
    "d": "M32.1 70.1c-.6 0-1.2-.5-1.2-1.2v-7.3c0-.6.5-1.2 1.2-1.2h7.5c.6 0 1.2.5 1.2 1.2V69c0 .6-.5 1.2-1.2 1.2h-7.5zM46.3 70.1c-.6 0-1.2-.5-1.2-1.2V57.7c0-.6.5-1.2 1.2-1.2h7.5c.6 0 1.2.5 1.2 1.2V69c0 .6-.5 1.2-1.2 1.2h-7.5zM60.5 70.1c-.6 0-1.2-.5-1.2-1.2v-7.3c0-.6.5-1.2 1.2-1.2H68c.6 0 1.2.5 1.2 1.2V69c0 .6-.5 1.2-1.2 1.2h-7.5zM32.1 42.9c-.6 0-1.2-.5-1.2-1.2V31.1c0-.6.5-1.2 1.2-1.2h21.7c.6 0 1.2.5 1.2 1.2v10.7c0 .6-.5 1.2-1.2 1.2H32.1zM60.5 42.9c-.6 0-1.2-.5-1.2-1.2v-7.3c0-.6.5-1.2 1.2-1.2H68c.6 0 1.2.5 1.2 1.2v7.3c0 .6-.5 1.2-1.2 1.2h-7.5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zm0 51.7c0 1.2-.9 2.1-2.1 2.1H28.3c-1.1 0-2.1-.9-2.1-2.1v-19h47.6v19zm0-25H26.2V28.3c0-1.2.9-2.1 2.1-2.1h43.4c1.1 0 2.1.9 2.1 2.1v18.4z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_instore_locations"
}
