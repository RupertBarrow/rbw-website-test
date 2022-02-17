import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/pricebook.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_pricebook_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/pricebook.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_pricebook_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.7 20H34.1c-3.3 0-6.1 2.8-6.1 5.8V28h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v10h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v10h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v1.8c0 3 2.8 6.2 6.1 6.2h37.6c3.3 0 6.3-3.3 6.3-6.6v-48c0-3.3-3-5.4-6.3-5.4zM43 61c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V39c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v22zm8 0c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V39c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v22zm10 0c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V39c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v22zm8 0c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V39c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v22z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_pricebook"
}
