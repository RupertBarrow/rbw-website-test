import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/linked.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_linked_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/linked.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_linked_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M17.3 36.1l-1.1-1.4s-.7-1-.9-1.6c-.2-.3-.5-.5-.9-.5h-.6c-3.5 0-6.5-2.6-6.7-6-.3-3.8 2.8-6.9 6.5-6.9h9.1c1.2 0 2.3.4 3.2.8 1.2.7 2.2 1.8 2.7 3.1.3.8.5 1.6.5 2.6 0 .5-.1.9-.2 1.4-.2.7.3 1.3 1 1.2h3.4c.5 0 .8-.4 1-.8.1-.6.1-1.2.1-1.8 0-.8-.1-1.7-.3-2.6-.3-1.4-.9-2.7-1.7-3.9-1.5-2.2-3.8-4-6.4-4.7-1-.3-2.2-.5-3.2-.5H14c-6.3 0-11.7 4.9-11.9 11.2-.3 6.6 5 12.1 11.6 12.1h3c.7-.1 1.1-1.1.6-1.7zm32.6-10.5c-.2-6.3-5.6-11.3-11.9-11.2l-2.7-.1c-.8 0-1.3 1-.8 1.6.8.9 1.4 1.9 2 3 .2.3.5.5.9.5h.6c3.5 0 6.5 2.6 6.7 6 .3 3.8-2.8 6.9-6.5 6.9h-9.1c-1.2 0-2.3-.4-3.2-.8-1.2-.7-2.2-1.8-2.7-3.1-.3-.8-.5-1.6-.5-2.6 0-.5.1-.9.2-1.4.2-.7-.3-1.3-1-1.2h-3.4c-.5 0-.8.4-1 .8-.1.6-.1 1.2-.1 1.8 0 .8.1 1.8.3 2.6.3 1.4.9 2.7 1.7 3.8 1.5 2.2 3.8 4 6.4 4.7 1 .3 2.2.5 3.2.5h9.1c6.7.3 12-5.2 11.8-11.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_linked"
}
