import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/change_request.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_change_request_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/change_request.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_change_request_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M16.4 10h3.2a.77.77 0 00.8-.7V6.8h11.2v2.4a.77.77 0 00.7.8h3.3a.77.77 0 00.8-.7V6.8A4.87 4.87 0 0031.6 2H20.4a4.87 4.87 0 00-4.8 4.8v2.4a.79.79 0 00.8.8zM45.2 14.8H6.8A4.87 4.87 0 002 19.6v25.6A4.87 4.87 0 006.8 50h38.4a4.87 4.87 0 004.8-4.8V19.6a4.87 4.87 0 00-4.8-4.8zM23.4 32.9l-6.1 6.3a1.08 1.08 0 01-1.1 0L10 32.9c-.5-.4-.1-1.1.7-1.1h3.8a12 12 0 0111.8-12.2h.4v4.6a8.19 8.19 0 00-7.7 7.6h3.6c.8 0 1.2.7.8 1.1zm19.4 0H39a12.16 12.16 0 01-12.1 12.2h-.3v-4.6c4.6 0 7.8-3 7.8-7.6h-3.7c-.8 0-1.1-.6-.7-1.1l6.2-6.3a1.08 1.08 0 011.1 0l6.2 6.3c.4.4 0 1.1-.7 1.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_change_request"
}
