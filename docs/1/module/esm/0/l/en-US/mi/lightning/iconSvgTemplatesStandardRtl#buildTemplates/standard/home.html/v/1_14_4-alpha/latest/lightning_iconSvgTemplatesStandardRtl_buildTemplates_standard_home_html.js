import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/home.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_home_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/home.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_home_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M78.8 51.2h-6.3v27.5c0 .8-.5 1.2-1.3 1.2H58.8c-.8 0-1.3-.5-1.3-1.2V57.5h-15v21.2c0 .8-.5 1.2-1.3 1.2H28.8c-.8 0-1.3-.5-1.3-1.2V51.2h-6.3c-.5 0-1-.2-1.1-.8-.3-.5-.1-1 .3-1.4l28.8-28.8c.5-.5 1.4-.5 1.8 0L79.8 49c.4.4.4.9.3 1.4s-.8.8-1.3.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_home"
}
