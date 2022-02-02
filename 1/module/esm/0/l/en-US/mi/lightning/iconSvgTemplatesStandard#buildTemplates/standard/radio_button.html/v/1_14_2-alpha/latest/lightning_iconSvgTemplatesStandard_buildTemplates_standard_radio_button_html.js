import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/radio_button.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_radio_button_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/radio_button.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_radio_button_scoped_css?scoped=true.js";

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
      "d": "M33.5 53.1c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4-6-13.4-13.4-13.4zm0 20.9c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5c0 4.2-3.4 7.5-7.5 7.5zM66.5 53.1c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4-6-13.4-13.4-13.4zM33.5 20c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4S40.9 20 33.5 20zm0 20.9c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5zM66.5 20c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4S73.9 20 66.5 20z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_radio_button"
