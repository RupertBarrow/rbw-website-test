import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesActionRtl#buildTemplates/action/web_link.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_web_link_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesActionRtl#buildTemplates/action/web_link.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_web_link_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27 2C13.7 2 3 12.7 3 26s10.7 24 24 24 24-10.7 24-24S40.3 2 27 2zm3 34.3c-1.5 1.5-2 4.4-2.6 6.4-.1.4-.4.8-.8 1l-1 .5c-.6.3-1.3.2-1.8-.3-1-.9-1.8-2.3-1.8-3.7 0-2.4-4-1.6-4-6.4 0-3.9-5-6.2-8.6-4.5-.3.1-.6.3-.9.3-.6.2-1.2-.2-1.3-.8C7.1 27.9 7 27 7 26c0-4.8 1.7-9.2 4.5-12.6 0-.1.1-.1.2-.1 2.4-2.8 5.5-5 9.1-6.2.9-.3 1.7.7 1.2 1.5-.4.6-.6 1.2-.6 1.7.1 2.1-1.9 3.4-2.8 3.1-.8-.3-3 1.1-1 2.1l1.1.5c.1 0 .2.1.2.1l.3.2c3.6 2.1 2.9 3.8 1.4 6.4-1.7 2.8-2.4 0-4.8-.8s-4.8.8-4 2.4c.8 1.6 3.2 0 4.8 1.6 1.6 1.6 1.6 4 6.4 2.4 4.8-1.6 5.6-.8 7.2.8 1.4 1.6 2.2 4.8-.2 7.2zm12.7-.2c-1.9-2.2 0-7.3-2.3-10.2-2.5-3.1-5.7.1-8.8-4.8-2.9-4.7.8-8.6 4.6-9.9 1-.4 2.1-.5 3.2-.5.2 0 .5.1.7.3 4.2 3.6 6.9 9 6.9 15 0 3.6-1 7-2.6 9.9-.4.6-1.2.7-1.7.2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_web_link"
}
