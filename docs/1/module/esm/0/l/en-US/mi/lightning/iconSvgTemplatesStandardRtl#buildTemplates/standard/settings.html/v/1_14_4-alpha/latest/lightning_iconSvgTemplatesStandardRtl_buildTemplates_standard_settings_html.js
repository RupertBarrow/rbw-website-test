import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/settings.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_settings_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/settings.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_settings_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50.1 41.3c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-3.9-8.8-8.8-8.8zM76.4 58l-4.6-3.9c.3-1.4.4-2.9.4-4.3s-.1-2.9-.4-4.3l4.6-3.9c1.5-1.3 2-3.5 1-5.3l-2-3.5c-.8-1.3-2.1-2-3.6-2-.5 0-1 .1-1.4.3l-5.8 2.1c-2.3-2-4.8-3.4-7.4-4.3l-1-5.9c-.4-2-2.1-3.1-4.1-3.1h-4c-2 0-3.8 1.1-4.1 3.1l-1 5.8c-2.8.9-5.3 2.4-7.5 4.3L29.6 31c-.5-.1-.9-.3-1.4-.3-1.5 0-2.9.8-3.6 2l-2 3.5c-1 1.8-.6 4 1 5.3l4.6 3.9c-.3 1.4-.4 2.9-.4 4.3 0 1.5.1 2.9.4 4.3l-4.6 3.9c-1.5 1.3-2 3.5-1 5.3l2 3.5c.8 1.3 2.1 2 3.6 2 .5 0 1-.1 1.4-.3l5.8-2.1c2.3 2 4.8 3.4 7.4 4.3l1 6c.4 2 2 3.4 4.1 3.4h4c2 0 3.8-1.5 4.1-3.5l1-6c2.9-1 5.5-2.5 7.8-4.6l5.4 2.1c.5.1 1 .3 1.5.3 1.5 0 2.9-.8 3.6-2l1.9-3.3c1.2-1.5.7-3.7-.8-5zm-26.3 5.9c-7.7 0-13.8-6.2-13.8-13.8s6.2-13.8 13.8-13.8 13.8 6.2 13.8 13.8-6.2 13.8-13.8 13.8z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_settings"
}
