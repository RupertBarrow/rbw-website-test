import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/connected_apps.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_connected_apps_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/connected_apps.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_connected_apps_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_3/latest/lwc.js";
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
      "d": "M23.8 31.2L20 48.8c-.2 1 1.1 1.7 1.7.9l21-26c.6-.7.1-1.7-.7-1.7H30.8c-.8 0-1.3-.9-.9-1.5l9.9-16.2c.6-1-.1-2.3-1.3-2.3H20.8c-1.1 0-2 .7-2.4 1.7L10.1 28c-.3 1 .4 2 1.4 2h11.4c.6 0 1.1.6.9 1.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_connected_apps"
