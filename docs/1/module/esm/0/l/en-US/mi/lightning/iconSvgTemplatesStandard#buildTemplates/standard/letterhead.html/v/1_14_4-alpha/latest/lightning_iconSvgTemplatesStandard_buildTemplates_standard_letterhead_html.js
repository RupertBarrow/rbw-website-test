import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/letterhead.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_letterhead_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/letterhead.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_letterhead_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zM71 69.1c0 .8-.8 1.4-1.6 1.4H30.5c-.8 0-1.4-.8-1.4-1.6v-9c0-.8.8-1.4 1.6-1.4h38.9c.8 0 1.4.8 1.4 1.6v9zm0-29.2c0 .8-.8 1.4-1.6 1.4H30.5c-.8 0-1.4-.8-1.4-1.6v-9c0-.8.8-1.4 1.6-1.4h38.9c.8 0 1.4.8 1.4 1.6v9z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_letterhead"
}
