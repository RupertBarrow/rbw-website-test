import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/text_background_color.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_text_background_color_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/text_background_color.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_text_background_color_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M25.9 16l4.3 10h-9l3.9-10h.8zM48 8v36c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h36c2.2 0 4 1.8 4 4zm-5.5 32.7L30.5 11c-.3-.6-.8-1-1.5-1h-7.1c-.6 0-1.2.4-1.4 1l-11 29.7c-.2.6.2 1.3.9 1.3h4.1c.6 0 1.2-.5 1.4-1.1l3.2-8.9h13.4l3.5 8.9c.2.6.8 1.1 1.4 1.1h4.1c.7 0 1.2-.7 1-1.3z"
    },
    key: 2,
    svg: true
  }, [])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_text_background_color"
