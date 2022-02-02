import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fedit.css%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_edit_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fedit.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_edit_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_3/latest/lwc.js";
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
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M48.8 7.4l-4.2-4.2c-1.6-1.6-4.1-1.6-5.6 0l-3.3 3.3c-.4.4-.4 1 0 1.4l8.5 8.5c.4.4 1 .4 1.4 0l3.3-3.3c1.5-1.6 1.5-4.1-.1-5.7zM32.9 10.7c-.4-.4-1-.4-1.4 0L5.4 36.8 2.1 48.1c-.3 1.1.7 2.2 1.8 1.9l11.4-3.2h-.1l26.1-26.1c.4-.4.4-1 0-1.4l-8.4-8.6z"
    },
    key: 3,
    svg: true
  }, [])])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_edit"
