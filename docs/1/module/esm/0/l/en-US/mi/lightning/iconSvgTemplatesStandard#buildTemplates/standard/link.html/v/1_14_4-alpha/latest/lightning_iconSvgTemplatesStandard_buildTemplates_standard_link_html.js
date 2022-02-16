import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Flink.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_link_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Flink.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_link_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M51.5 69.4c-.9-.1-1.7-.2-2.6-.4-.9-.2-1.8-.4-2.7-.7-.5-.2-1.1-.1-1.5.3l-.6.6c-3.6 3.6-9.4 4-13.3.7-4.2-3.7-4.4-10.1-.5-14l9.5-9.5c1.2-1.2 2.7-2.1 4.3-2.5 2-.5 4.1-.4 6 .4 1.2.5 2.3 1.2 3.2 2.1.5.5.9 1.1 1.2 1.7.5.8 1.6 1 2.3.3l3.5-3.5c.5-.5.6-1.3.1-1.9-.5-.7-1.1-1.4-1.7-2-.9-.9-1.9-1.7-3-2.4-1.8-1.1-3.8-1.9-5.8-2.3-3.9-.8-8.1-.2-11.7 1.8-1.4.8-2.7 1.7-3.9 2.9l-9.2 9.2c-6.6 6.6-7.1 17.3-.8 24.1 6.7 7.2 17.9 7.4 24.8.5l3.1-3.1c1-.7.5-2.2-.7-2.3z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M74.5 24.5c-6.8-6.3-17.6-5.8-24.1.8L47.5 28c-.9.9-.3 2.3.9 2.4 1.8.1 3.5.5 5.3 1.1.5.2 1.1 0 1.5-.3l.6-.6c3.6-3.6 9.4-4 13.3-.7 4.2 3.7 4.4 10.1.5 14l-9.5 9.5c-1.2 1.2-2.7 2.1-4.3 2.5-2 .5-4.1.4-6-.4-1.2-.5-2.3-1.2-3.2-2.1-.5-.5-.9-1-1.2-1.6-.5-.8-1.6-1-2.3-.3L39.6 55c-.5.5-.6 1.3-.1 1.9.5.7 1.1 1.4 1.7 2 .9.9 1.9 1.7 3 2.4 1.8 1 3.8 1.7 5.8 2.1 3.9.8 8.1.2 11.7-1.8 1.4-.8 2.7-1.7 3.9-2.9l9.5-9.5c6.7-6.8 6.6-18.1-.6-24.7z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_link"
}
