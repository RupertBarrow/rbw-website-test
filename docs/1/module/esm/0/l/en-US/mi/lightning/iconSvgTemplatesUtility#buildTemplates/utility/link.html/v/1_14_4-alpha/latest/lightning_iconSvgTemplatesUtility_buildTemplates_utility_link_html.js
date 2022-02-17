import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/link.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_link_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/link.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_link_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
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
    "d": "M27.2 41.7l-2.1-.3c-.7-.1-1.4-.3-2.1-.6-.4-.1-.9 0-1.2.3l-.5.5c-2.9 2.9-7.6 3.2-10.6.6-3.4-2.9-3.5-8.1-.4-11.2l7.6-7.6c1-1 2.2-1.6 3.4-2 1.6-.4 3.3-.3 4.8.3.9.4 1.8.9 2.6 1.7.4.4.7.8 1 1.3.4.7 1.3.8 1.8.2l2.8-2.8c.4-.4.4-1 .1-1.5-.4-.6-.9-1.1-1.4-1.6-.7-.7-1.5-1.4-2.4-1.9-1.4-.9-3-1.5-4.7-1.8-3.1-.6-6.5-.1-9.3 1.4-1.1.6-2.2 1.4-3.1 2.3l-7.3 7.3C.9 31.6.5 40.2 5.6 45.6c5.3 5.8 14.3 5.9 19.8.4l2.5-2.5c.7-.5.2-1.7-.7-1.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M45.6 5.8c-5.5-5.1-14.1-4.7-19.3.6L24 8.6c-.7.7-.2 1.9.7 2 1.4.1 2.8.4 4.2.8.4.1.9 0 1.2-.3l.5-.5c2.9-2.9 7.6-3.2 10.6-.6 3.4 2.9 3.5 8.1.4 11.2L34 28.8c-1 1-2.2 1.6-3.4 2-1.6.4-3.3.3-4.8-.3-.9-.4-1.8-.9-2.6-1.7-.4-.4-.7-.8-1-1.3-.4-.7-1.3-.8-1.8-.2l-2.8 2.8c-.4.4-.4 1-.1 1.5.4.6.9 1.1 1.4 1.6.7.7 1.6 1.4 2.4 1.9 1.4.9 3 1.5 4.6 1.8 3.1.6 6.5.1 9.3-1.4 1.1-.6 2.2-1.4 3.1-2.3l7.6-7.6c5.6-5.5 5.4-14.5-.3-19.8z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_link"
}
