import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fapex_plugin.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_apex_plugin_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fapex_plugin.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_apex_plugin_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50.2 40l14-14c.7-.7.7-1.9 0-2.6l-3-3c-.7-.7-1.9-.7-2.6 0l-14 14 5.6 5.6zM65.6 55.8l14-14c.7-.7.7-1.9 0-2.6l-3-3c-.7-.7-1.9-.7-2.6 0l-14 14 5.6 5.6zM63.6 67.4c.2-.3.4-.6.5-1 .1-.5 0-1-.3-1.4-.1-.1-.1-.2-.2-.3l-.1-.1-28.2-28.2-.1-.1c-.3-.4-.9-.5-1.3-.5-.6 0-1 .3-1.4.6-.3.2-.5.4-.7.7-.2.2-.3.3-.4.5-.2.2-.3.4-.5.6-.2.3-.4.5-.5.8-.2.3-.4.6-.5 1-.2.4-.4.8-.6 1.1-.2.4-.4.9-.5 1.3-.2.5-.4 1-.5 1.5-.2.6-.3 1.2-.5 1.7-.2.7-.3 1.3-.4 2-.1.7-.3 1.5-.4 2.2l-.3 2.4c-.1.9-.1 1.8-.2 2.7v3c0 1.1 0 2.2.1 3.3.1 1.2.1 2.4.2 3.6 0 .3.1.7.1 1h.2l-6.5 6.5c-.7.7-.7 1.9 0 2.6l4.6 4.6c.7.7 1.9.7 2.6 0l6.5-6.5c2.3.2 4.7.4 7.1.4 2 0 3.9 0 5.9-.2 1.6-.1 3.2-.3 4.8-.6 1.3-.2 2.6-.5 3.8-.9 1-.3 2-.7 2.9-1.1.7-.3 1.5-.7 2.1-1.1.9-.6 1.8-1.2 2.5-2 0 .1.1 0 .2-.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_apex_plugin"
}
