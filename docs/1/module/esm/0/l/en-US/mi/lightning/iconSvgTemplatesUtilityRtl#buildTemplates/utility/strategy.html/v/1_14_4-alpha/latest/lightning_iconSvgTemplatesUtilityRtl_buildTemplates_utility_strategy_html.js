import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/strategy.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_strategy_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/strategy.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_strategy_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.9 18.7h-8.1c-1.8 0-3.2 1.4-3.2 3.2v2h-7.5V8.1c0-.5-.5-1-1-1H16.6V5.2c0-1.8-1.4-3.2-3.2-3.2H5.3C3.6 2 2.1 3.4 2.1 5.2v8.1c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2v-1.9H24v12.5h-7.4V22c0-1.8-1.4-3.2-3.2-3.2H5.3c-1.8 0-3.2 1.4-3.2 3.2v8c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2v-1.9H24v12.5h-7.4v-1.8c0-1.8-1.4-3.2-3.2-3.2H5.3c-1.8 0-3.2 1.4-3.2 3.2v8.1c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2V45h10.6c.6 0 1-.6 1-1V28.2h7.5V30c0 1.8 1.4 3.2 3.2 3.2H47c1.8 0 3.2-1.4 3.2-3.2v-8.1c-.1-1.8-1.5-3.2-3.3-3.2zm-34.4-6.3H6.2V6h6.3v6.4zm0 10.4v6.3H6.2v-6.3h6.3zm0 23.2H6.2v-6.3h6.3V46zm33.6-23.2v6.3h-6.3v-6.3h6.3z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_strategy"
}
