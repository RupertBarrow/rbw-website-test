import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/connected_apps.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_connected_apps_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/connected_apps.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_connected_apps_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_3/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M73 21H27c-3.3 0-6 2.7-6 6v46c0 3.3 2.7 6 6 6h46c3.3 0 6-2.7 6-6V27c0-3.3-2.7-6-6-6zm-2 52H29c-1.1 0-2-.9-2-2V29c0-1.1.9-2 2-2h42c1.1 0 2 .9 2 2v42c0 1.1-.9 2-2 2z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M58.5 47H52l5.7-9.4c.6-1-.1-2.6-1.3-2.6h-8.3c-1.2 0-2.3.8-2.8 1.9l-5.2 13.8c-.4 1 .3 2.3 1.4 2.3h6.6l-3.2 10.9c-.3 1 1 1.6 1.7.8l13.1-15.4c.8-1 .1-2.3-1.2-2.3z"
    },
    key: 3,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_connected_apps"
