import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/skip_back.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_skip_back_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/skip_back.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_skip_back_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26 7.9V2.6c0-.5-.6-.8-1.1-.5l-10.3 8.5c-.4.3-.4.9 0 1.2l10.3 8.4c.4.4 1.1 0 1.1-.4v-5.4c8 0 14.6 6.5 14.6 14.6S34 43.5 26 43.5 11.4 37 11.4 28.9c0-2.3.5-4.5 1.5-6.5 0 0 0-.1.1-.2.2-.4.4-.9.6-1.2.3-.5.6-1.3 0-1.8s-3.1-2.6-3.3-2.7c-.2-.1-.9-.8-1.6.2-.4.6-.9 1.5-1.3 2.2 0 .1-.1.1-.1.2-.2.3-.3.6-.4.7-1.3 2.7-2 5.8-2 9.1 0 11.6 9.4 21 21 21s21-9.4 21-21-9.3-21-20.9-21z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_skip_back"
}
