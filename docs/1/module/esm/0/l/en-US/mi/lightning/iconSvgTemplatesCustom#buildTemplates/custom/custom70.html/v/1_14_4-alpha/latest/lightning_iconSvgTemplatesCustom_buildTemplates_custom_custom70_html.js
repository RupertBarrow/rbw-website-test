import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesCustom%23buildTemplates%2Fcustom%2Fcustom70.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesCustom_buildTemplates_custom_custom70_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesCustom%23buildTemplates%2Fcustom%2Fcustom70.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesCustom_buildTemplates_custom_custom70_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M47.9 63.8L36.4 52.5c-2.4-2.3-6.2-2.3-8.6 0l-7.2 7.1c-.8.801-.8 2.101 0 2.801L22 63.8l1.4 1.4L35 76.6l.7.7 2.2 2.101c.8.8 2.1.8 2.9 0L48 72.3c2.3-2.3 2.3-6.1-.1-8.5zm-18.7-4.2l1.5-1.399c.8-.8 2-.8 2.8 0l8.7 8.5c.8.8.8 2.1 0 2.8l-1.5 1.4c-.8.8-2 .8-2.8 0l-8.7-8.5c-.8-.801-.8-2.101 0-2.801zM41.7 49.2l9.3 9.1c.2.2.4.3.7.3l4.3-.1c.5 0 .9-.4.9-.9l.1-3.7c0-.5.4-.9.9-.9l3.8-.1c.5 0 .899-.4.899-.9l.101-3.7c0-.5.399-.9.899-.9l3.801-.1c.5 0 .899-.4.899-.9l.101-3.7c0-.5.399-.9.899-.9l3.8-.1c.5 0 .9-.4.9-.9l.1-3.8c0-.5.4-.8.801-.9l4.1-.6c.7-.1 1.1-.9.7-1.5l-8.8-13c-.7-1-2.101-1.1-3-.3l-26.3 26c-.6.6-.6 1.8.1 2.5z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom70"
}
