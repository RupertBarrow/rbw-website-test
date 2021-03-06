import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/toggle.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_toggle_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/toggle.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_toggle_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M39.2 2H12.4C6.6 2.2 2 6.9 2 12.8s4.6 10.6 10.4 10.8h26.8c5.9 0 10.8-4.8 10.8-10.8S45.2 2 39.2 2zM12.7 18.8c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM39.2 28.5H12.4C6.6 28.7 2 33.4 2 39.2S6.6 49.8 12.4 50h26.8c6 0 10.8-4.8 10.8-10.8s-4.8-10.7-10.8-10.7zm.4 18.4H12.3c-4-.2-7.2-3.5-7.2-7.6s3.2-7.4 7.2-7.6h27.3c4 .2 7.2 3.5 7.2 7.6s-3.2 7.4-7.2 7.6z"
    },
    key: 3,
    svg: true
  }, []), api_element("circle", {
    attrs: {
      "cx": "39.2",
      "cy": "39.2",
      "r": "5.2"
    },
    key: 4,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_toggle"
