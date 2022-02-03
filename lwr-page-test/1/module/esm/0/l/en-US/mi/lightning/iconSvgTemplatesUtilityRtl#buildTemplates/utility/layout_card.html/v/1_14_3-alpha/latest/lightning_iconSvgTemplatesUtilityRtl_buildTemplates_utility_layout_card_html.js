import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/layout_card.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_layout_card_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/layout_card.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_layout_card_scoped_css?scoped=true.js";

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
  }, [api_element("path", {
    attrs: {
      "d": "M5.1 3.29A3.1 3.1 0 002 6.39v39.22a3.1 3.1 0 003.1 3.1h18.58a3.09 3.09 0 003.09-3.1V6.39a3.09 3.09 0 00-3.09-3.1zm26.84 10.84a2.58 2.58 0 100 5.16h15.48a2.58 2.58 0 000-5.16zM29.35 26a2.58 2.58 0 012.59-2.58h15.48a2.58 2.58 0 010 5.16H31.94A2.58 2.58 0 0129.35 26zm2.59 6.71a2.58 2.58 0 100 5.16h15.48a2.58 2.58 0 000-5.16z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_layout_card"
