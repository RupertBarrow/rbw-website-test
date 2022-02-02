import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Ffilter.css%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_filter_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Ffilter.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_filter_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
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
      "d": "M48.2 4H3.8C2.4 4 1.6 5.7 2.5 6.8L22 29.5c.6.7 1 1.7 1 2.6v14.4c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V32.1c0-1 .3-1.9 1-2.6L49.5 6.8c.9-1.1.2-2.8-1.3-2.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_filter"
