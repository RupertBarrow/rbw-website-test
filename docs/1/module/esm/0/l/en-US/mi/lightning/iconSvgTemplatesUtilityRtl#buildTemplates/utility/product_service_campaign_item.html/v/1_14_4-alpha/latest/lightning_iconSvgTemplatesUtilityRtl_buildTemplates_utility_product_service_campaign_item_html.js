import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fproduct_service_campaign_item.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_product_service_campaign_item_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fproduct_service_campaign_item.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_product_service_campaign_item_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M45.2 19.6a1.6 1.6 0 011.59 1.45V43.6a4.82 4.82 0 01-4.59 4.8H10a4.82 4.82 0 01-4.8-4.59V21.2a1.6 1.6 0 011.45-1.59H45.2zm-12.39 6.67l-.11.08-9.16 9.93-4.15-4a1.2 1.2 0 00-1.61-.08l-.1.08L16 33.8a1 1 0 00-.09 1.44l.09.1 5.86 5.55a2.47 2.47 0 001.71.71 2.27 2.27 0 001.71-.71l4.9-5.16.39-.41.52-.55 5-5.3A1.25 1.25 0 0036.2 28l-.07-.09-1.72-1.54a1.19 1.19 0 00-1.6-.1zM45.2 3.6A4.81 4.81 0 0150 8.4v4.8a1.6 1.6 0 01-1.6 1.6H3.6A1.6 1.6 0 012 13.2V8.4a4.81 4.81 0 014.8-4.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_product_service_campaign_item"
}
