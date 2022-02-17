import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/loop.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_loop_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/loop.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_loop_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.2 32.6c0 .1 0 .1-.1.2-.3.9-.5 1.8-.9 2.6-.4.9-.8 1.9-1.3 2.7-1 1.8-2.2 3.4-3.6 4.8s-3 2.7-4.7 3.7c-1.7 1-3.6 1.9-5.6 2.4-2 .6-4.1.8-6.2.8C12.3 50 2 39.7 2 27.1S12.3 4.2 24.9 4.2c4.3 0 8.3 1.2 11.7 3.2 1.7 1 3.2 2.2 4.5 3.5.4.3.7.6 1 1 .8.6 1.3.2 1.3-.8V3.6c0-.8.8-1.6 1.6-1.6h3.2c.9 0 1.6.8 1.7 1.6v19.6c0 .8-.6 1.4-1.4 1.4H28.9c-.9 0-1.5-.6-1.5-1.5v-3.3c0-.9.8-1.6 1.6-1.6h7.5c.6 0 1.2-.2 1.4-.5-2.9-4-7.6-6.6-13-6.6-8.9 0-16 7.2-16 16s7.2 16 16 16c7 0 12.9-4.4 15.1-10.6 0 0 .3-1.4 1.4-1.4H46c.7 0 1.3.5 1.3 1.2-.1.1-.1.2-.1.3z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_loop"
}
