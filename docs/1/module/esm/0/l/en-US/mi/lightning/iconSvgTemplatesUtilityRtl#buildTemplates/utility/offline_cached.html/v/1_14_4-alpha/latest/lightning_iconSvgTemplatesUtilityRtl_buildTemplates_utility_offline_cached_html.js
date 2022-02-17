import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/offline_cached.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_offline_cached_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/offline_cached.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_offline_cached_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M38.6 20.4c-1-6.5-6.7-11.5-13.5-11.5-7.6 0-13.7 6.1-13.7 13.7 0 .3 0 .7.1 1-5 .4-8.9 4.6-8.9 9.6 0 5.4 4.3 9.7 9.7 9.7h11.5l-8.1-8.1c-.4-.4-.4-.9 0-1.3l1.3-1.3c.4-.4.9-.4 1.3 0l3.5 3.5c.4.4 1.1.1 1.1-.4V21.8c0-.4.5-.9 1-.9h1.9c.5 0 .9.4.9.9v13.4c0 .6.8.8 1.1.4l3.5-3.5c.4-.4.9-.4 1.3 0l1.3 1.3c.4.4.4.9 0 1.3L26 42.9h12.3c6.1-.1 11-5.1 11-11.3.1-6.1-4.7-11-10.7-11.2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_offline_cached"
}
