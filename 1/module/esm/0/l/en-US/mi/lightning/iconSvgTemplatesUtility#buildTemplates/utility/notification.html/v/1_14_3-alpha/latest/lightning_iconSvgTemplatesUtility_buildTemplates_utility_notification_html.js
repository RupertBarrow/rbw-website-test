import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fnotification.css%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_notification_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fnotification.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_notification_scoped_css?scoped=true.js";

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
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M46 33h-.5c-1.9 0-3.5-1.6-3.5-3.5V18c0-9.1-7.6-16.4-16.8-16C16.6 2.4 10 9.8 10 18.5v11.1c0 1.9-1.6 3.4-3.5 3.4H6c-2.2 0-4 1.9-4 4.1v1.5c0 .7.7 1.4 1.5 1.4h45c.8 0 1.5-.7 1.5-1.5V37c0-2.2-1.8-4-4-4zM30.9 44h-9.8c-.6 0-1.1.6-1 1.2.5 2.8 3 4.8 5.9 4.8s5.4-2.1 5.9-4.8c.1-.6-.4-1.2-1-1.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_notification"
