import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/graph.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_graph_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/graph.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_graph_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M2 45.5c0 2.2 1.8 4 4 4h42.4c.9 0 1.6-.7 1.6-1.6v-2.8c0-.9-.7-1.6-1.6-1.6H9.5c-.8 0-1.5-.7-1.5-1.5V4.1c0-.9-.7-1.6-1.6-1.6H3.6c-.9 0-1.6.7-1.6 1.6v41.4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M49.7 14.1c0-1.7-1.3-3-3-3-.9 0-1.6.4-2.2.9l-8.6 8.6L30 15l-.1-.1-.2-.2c-.1 0-.1-.1-.2-.1-.1-.1-.2-.1-.3-.2-.1 0-.1-.1-.2-.1s-.2-.1-.4-.1c-.1 0-.1 0-.2-.1-.2 0-.4-.1-.6-.1-.2 0-.4 0-.6.1-.1 0-.1 0-.2.1-.1 0-.3.1-.4.1-.1 0-.1.1-.2.1-.1.1-.2.1-.3.2-.1 0-.1.1-.2.2s-.2.1-.3.2L14.2 26.5c-.6.6-1 1.3-1 2.2 0 1.7 1.3 3 3 3 .7 0 1.4-.3 1.9-.7l9.8-9.7 5.7 5.6c.1.1.2.1.3.2l.2.2c.1.1.2.1.3.2.1 0 .1.1.2.1.1.1.3.1.4.1.1 0 .1 0 .2.1.2 0 .4.1.6.1.2 0 .4 0 .6-.1h.2c.1 0 .2-.1.4-.1.1 0 .1-.1.2-.1s.2-.1.3-.2c.1 0 .1-.1.2-.1l.1-.1.1-.1.1-.1 10.8-10.7c.5-.6.9-1.3.9-2.2z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_graph"
}
